import { CldUploadWidget } from 'next-cloudinary'
import { toast } from 'sonner'

interface MediaUploaderProps {
  onValueChange: (value: string) => void
  setImage: React.Dispatch<any>
  image: any
  publicId: string
  type: string
}
export function MediaUploader({
  onValueChange,
  setImage,
  image,
  publicId,
  type,
}: MediaUploaderProps) {
  function onUploadSuccessHandler(result: any) {
    toast('Upload realizado com sucesso.', {
      description: '1 credito foi debitado de sua conta.',
      duration: 5000,
      className: 'success-toast',
    })
  }

  function onUploadErrorHandler() {
    toast('Algo deu errado durante o upload.', {
      description: 'Por favor, tente novamente',
      duration: 5000,
      className: 'error-toast',
    })
  }

  return (
    <CldUploadWidget
      uploadPreset="avm_pixelvelvet"
      options={{
        multiple: false,
        resourceType: 'image',
      }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    >
      {({ open }) => (
        <div className="flex flex-col gap-4">
          <h3 className="h3-bold text-dark-600">Original</h3>
          {publicId ? <>Here is the image</> : <div>Here is no image</div>}
        </div>
      )}
    </CldUploadWidget>
  )
}
