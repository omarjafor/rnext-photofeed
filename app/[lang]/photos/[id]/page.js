import PhotoDetails from '@/components/PhotoDetails'
import React from 'react'

const page = ({params:{id, lang}}) => {

  return (
    <PhotoDetails id={id} lang={lang} />
  )
}

export default page