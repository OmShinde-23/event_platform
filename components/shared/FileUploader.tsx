'use client'

import { useCallback, Dispatch, SetStateAction } from 'react'
import { FileWithPath } from 'react-dropzone'
import { useDropzone } from '@uploadthing/react/hooks'
import { generateClientDropzoneAccept } from 'uploadthing/client'

import { Button } from '@/components/ui/button'
import { convertFileToUrl } from '@/lib/utils'

// props from Eventform.tsx component 
type FileUploaderProps = {
  onFieldChange: (url: string) => void
  imageUrl: string
  setFiles: Dispatch<SetStateAction<File[]>>
}

                                 // Accepting props
export function FileUploader({ imageUrl, onFieldChange, setFiles }: FileUploaderProps) {

       //onDrop is use to know the when the file is uploaded
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {

    //After file uploaded we set them to state
    setFiles(acceptedFiles)

    //Create url of that image
    onFieldChange(convertFileToUrl(acceptedFiles[0]))
  }, [])
 
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,

    //Accept all types of images
    accept: 'image/*' ? generateClientDropzoneAccept(['image/*']) : undefined,
  })

  return (
    <div
      {...getRootProps()}
      className="flex-center bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50">

      {/* Input field to accept images  */}
      <input {...getInputProps()} className="cursor-pointer" />

      {imageUrl ? (

        //display image
        <div className="flex h-full w-full flex-1 justify-center ">
          <img
            src={imageUrl}
            alt="image"
            width={250}
            height={250}
            className="w-full object-cover object-center"
          />
        </div>
      ) : (

        //or select from computer
        <div className="flex-center flex-col py-5 text-grey-500">
          <img src="/assets/icons/upload.svg" width={77} height={77} alt="file upload" />
          <h3 className="mb-2 mt-2">Drag photo here</h3>
          <p className="p-medium-12 mb-4">SVG, PNG, JPG</p>
          <Button type="button" className="rounded-full">
            Select from computer
          </Button>
        </div>
      )}
    </div>
  )
}