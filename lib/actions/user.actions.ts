'use server'

import { revalidatePath } from 'next/cache'

import User from '../models/user.model'
import { connectToDatabase } from '../database/mongoose'
import { handleError } from '../utils'

// CREATE
export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase()

    const newUser = await User.create(user)
    return JSON.parse(JSON.stringify(newUser))
  } catch (error) {
    handleError(error)
  }
}

// READ
export async function getUserById(userId: string) {
  try {
    await connectToDatabase()

    const user = await User.findOne({ clerkId: userId })

    if (!user) throw new Error('Usuário não encontrado.')

    return JSON.parse(JSON.stringify(user))
  } catch (error) {
    handleError(error)
  }
}

// UPDATE
export async function updateUser(clerkId: string, user: UpdateUserParams) {}

// DELETE
export async function deleteUser(clerkId: string) {}
