import { IMAGES_API_URL } from '@/lib/constants';
import { fetchGames } from '@/lib/fetchers/fetchGames';
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import BlurImage from '@/components/ui/blurImage';

type GamePageProps = {
  params: {
    slug: string;
    seo_title: string;
  }
}

export default async function GamePage ({ params: { slug, seo_title } }: GamePageProps) {
  const games = await fetchGames()
  const currentGame = games.find((game: any) => game.provider === slug && game.seo_title === seo_title)
  const imageURL = `${IMAGES_API_URL}/${currentGame.identifier}.webp`
  return (
    <main className='min-h-screen py-8 md:py-24'>
      <Card className='bg-transparent text-white'>
        <CardHeader className='flex items-center md:items-end md:mb-6'>
          <CardTitle>{currentGame.title}</CardTitle>
        </CardHeader>

        <CardContent className='flex flex-col md:flex-row gap-5'>
          <div className='w-full md:w-2/5'>
            <BlurImage src={imageURL} />
          </div>
          <div className='w-full md:w-3/5 pt-16 md:pt-0 flex justify-end font-medium'>
            <div className='w-full lg:w-1/2'>
              <div className='flex justify-between'>
                <span className='text-[#6c6c6c]'>Provider</span> 
                <span>{currentGame.provider}</span>
              </div>
              <Separator className='my-5' />

              <div className='flex justify-between items-center'>
                <span className='text-[#6c6c6c]'>Categories</span> 
                <div className="whitespace-nowrap flex flex-col items-end">{currentGame.categories.map((category: string) => {
                  return (
                    <div key={category}>{category}</div>
                  )
                })}</div>
              </div>

              <Separator className='my-5' />

              <div className='flex justify-between'>
                <span className='text-[#6c6c6c]'>Platforms</span> 
                <div>{currentGame.devices.join(', ')}</div>
              </div>
            </div>
            
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

export async function generateStaticParams() {
  const games = await fetchGames() 
  return games.map((game: any) => ({
    slug: game.provider,
    seo_title: game.seo_title,
  }))
}