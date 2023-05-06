import Image from 'next/image'
import { Alata } from 'next/font/google'
import Head from 'next/head'
import Nov from '../components/Nov'
import Ul from '@/components/Ul'
import { useState } from 'react'

const alata = Alata({
  subsets: ['latin'],
  weight: "400"
})

export default function Home() {
  const [togle, setTogle] = useState(false)

  function click() {

    setTogle(prew => prew = !prew)
  }

  console.log(togle);
  return (<div className='flex flex-col'>
    <Head>
      <title>Bosh sahifa</title>
    </Head>
    <heder className={`${alata.className} header  z-10 backdrop-filter flex sticky top-0 left-0  items-center justify-between px-6 py-6`}>
      <nav  className='flex gap-8 flex-wrap items-center  '>
        <Image
          className="relative "
          src="/logo.png"
          alt="Next.js Logo"
          width={280}
          height={57}
          priority
        />
        {<Nov></Nov>}
      </nav>
    </heder>

    <main className='  flex-grow  '>
      <section className='py-10 md:py-2 md:px-2 px-10   mx-auto bg_Img  h-[100vh]'>
        <ul className='flex  px-5  rounded-2xl lg:flex gap-7 max-md:flex-wrap max-md:text-center max-md:justify-center  '>
          <li className=' flex  flex-col justify-center '>
            <h1 className='text-8xl font-mono font-bold text-[4vw]  mb-4'>Math Master</h1>
            <p className='font-semibold tracking-wide text-[2vw] max-w-screen-sm:text-[4vw] w-[40vw] max-md:w-[50vw]'>Siz Math Master kitoblari yordamida siz matematikani mukammal darajada o'rganishingiz mumkin.Har bir kitob shunday ishlab chiqilganki, ularni muvaffaqiyatli yakunlab, siz matamatika ustoziga aylanishingiz va shu sohada o‘z faoliyatingizni boshlashingiz mumkin.</p>
          </li>
          <li className='boook  '>
          </li>
        </ul>
      </section>

      <section className=' py-10 px-10 -z-0  mx-auto grad '>
        <ul className='flex justify-between rounded-2xl  max-md:justify-center py-10 px-10 gap-5 md:py-5 md:px-5 flex-wrap'>
          <li key={"tolk"}>
            <div className="book">
              <p className='pl-10 text-gray-800'>Bizda ta'lim olgan o'quvchilarimiz hozirgi kunda tajribali mutaxasis va nufuzli oliy ta'lim universitetlarda o'qimoqda.</p>
              <div className="cover">
                <Image className="relative "
                  src="/student.png"
                  alt="Next.js polo"
                  width={580}
                  height={57}
                  priority />
              </div>
            </div>
          </li>
          <li key={"box"}>
            <div className="book ">
              <p className='pl-10 text-gray-800'>Bizning o'qish tizimimiz tezkor bo'lib 3 oy davom etadi. Va mutaxasis darajaga yetadi.</p>
              <div className="cover ">
                <Image className="relative "
                  src="/none.png"
                  alt="Next.js polo"
                  width={580}
                  height={57}
                  priority />
              </div>
            </div>
          </li>
          <li key={"logo"}>
            <div className="book bg-slate-800">
              <p className='pl-10 text-gray-800 '  >Bizning ustozlarimiz eng kuchli va tajribali hisoblanadi. Ustozlarimizning 10 yillik tajribaga ega.</p>
              <div className="cover bg-orange-300">
                <Image className="relative "
                  src="/light.png"
                  alt="Next.js polo"
                  width={580}
                  height={57}
                  priority />
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>

    <footer className='bg-slate-300 py-5 px-6 gol   '>
      <div className="footer-list flex items-center py-10 px-10 flex-wrap gap-5 justify-between">
        <div className="footer-img ">
          <Image
            className="relative "
            src="/logo.png"
            alt="Next.js Logo"
            width={280}
            height={57}
            priority
          />
        </div>
        <div className="footer-social flex gap-4">
          <a href="https://www.instagram.com/jaloliddin9785/">
            <Image
              className="relative "
              src="/insta.png"
              alt="Next.js Logo"
              width={35}
              height={35}
              priority
            />
          </a>
          <a href="https://t.me/mirzo_3">
            <Image
              className="relative "
              src="/tel.png"
              alt="Next.js Logo"
              width={35}
              height={35}
              priority
            />
          </a>
          <a href="https://www.facebook.com">
            <Image
              className="relative "
              src="/fac.png"
              alt="Next.js Logo"
              width={35}
              height={35}
              priority
            />
          </a>
          <a href="https://github.com/Jaloliddin7">
            <Image
              className="relative "
              src="/git.svg"
              alt="Next.js Logo"
              width={35}
              height={35}
              priority
            />
          </a>
        </div>
      </div>
      <ul className='flex justify-start mx-auto px-10 gap-20 mb-6 flex-wrap '>
        <li className='flex flex-col '>
          <a className=' ease transition-all' href="#"> Bosh Sahifa</a>
          <a className=' ease transition-all' href="#"> Masalalar </a>
          <a className=' ease transition-all' href="#">Video Darslar </a>
          <a className=' ease transition-all' href="#">Algebra </a>
        </li>
        <li className='flex flex-col'>
          <a className=' ease transition-all' href="#">Geometriya</a>
          <a className=' ease transition-all' href="#">Geometriya  </a>
          <a className=' ease transition-all' href="#">Fizika </a>
          <a className=' ease transition-all' href="#"> Izohlar</a>
        </li>

        <li className='flex flex-col'>
          <a className=' ease transition-all' href="#"> Kontaktlar</a>
          <a className=' ease transition-all' href="#"> Mulohazalar</a>
        </li>
      </ul>
      <h1 className='font-semibold'>
        THE AUTHOR: Abdutolipov Jaloliddin
      </h1>
    </footer>

  </div>
  )
}


