import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'
import React from 'react'

const BlurImage = async ({src}: {src: string}) => {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer())
  })
  const {base64} = await getPlaiceholder(buffer)
  return (
    <div>
      <Image src={src} width={600} height={400} className='w-full h-full' quality={100} alt='game_image' placeholder='blur' blurDataURL={base64} />
    </div>
  )
}

export default BlurImage