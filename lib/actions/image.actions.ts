'use server'

import { revalidatePath } from 'next/cache'
import { handleError } from '../utils'

import { connectToDatabase } from '../database/mongoose'
import User, { IUser } from '../models/user.model'
import Image, { IImage } from '../models/image.model'
import { redirect } from 'next/navigation'

// utils
const populateUser = (query: any) =>
  query.populate({
    path: 'author',
    model: User,
    select: '_id firstName lastName',
  })

// ADD IMAGE
export async function addImage({ image, userId, path }: AddImageParams) {
  try {
    await connectToDatabase()

    const author: IUser | null = await User.findById(userId)

    if (!author) throw new Error('Usuário não encontrado.')

    const newImage: IImage = await Image.create({
      ...image,
      author: author._id,
    })

    revalidatePath(path)

    return JSON.parse(JSON.stringify(newImage))
  } catch (error) {
    handleError(error)
  }
}

// UPDATE IMAGE
export async function updateImage({ image, userId, path }: UpdateImageParams) {
  try {
    await connectToDatabase()

    const imageToUpdate = await Image.findById(image._id)

    if (!imageToUpdate || imageToUpdate.author.toHexString() !== userId)
      throw new Error('Não autorizado ou imagem não encontrada.')

    const updatedImage = await Image.findByIdAndUpdate(
      imageToUpdate._id,
      image,
      { new: true }
    )

    revalidatePath(path)

    return JSON.parse(JSON.stringify(updatedImage))
  } catch (error) {
    handleError(error)
  }
}

// DELETE IMAGE
export async function deleteImage(imageId: string) {
  try {
    await connectToDatabase()

    await Image.findByIdAndDelete(imageId)
  } catch (error) {
    handleError(error)
  } finally {
    redirect('/')
  }
}

// GET IMAGE BY ID
export async function getImageById(imageId: string) {
  try {
    await connectToDatabase()

    const image = await populateUser(Image.findById(imageId))

    if (!image) throw new Error('Imagem não encontrada.')

    return JSON.parse(JSON.stringify(image))
  } catch (error) {
    handleError(error)
  }
}
