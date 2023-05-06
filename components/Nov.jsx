import Link from 'next/link'
import React from 'react'
import { useRouter } from "next/router";


function Nov() {
  const router = useRouter();
  return (
    <ul className='flex gap-6 items-center  justify-start'>
      <li className={`Link ${router.pathname == "/" ? "Link_Befor" : "active"}`}>
        <Link  href={"/"}><p>Bosh sahifa</p></Link>
      </li>
      <li className={`Link ${router.pathname == "/Masalalar" ? "Link_Befor" : "active"}`}>
        <Link  href={"/Masalalar"}><p>Masalalar</p></Link>
      </li>
      <li className={`Link ${router.pathname == "/Masalalar" ? "Link_Befor" : "active"}`}>
        <Link  href={"/Masalalar"}><p>Video darslar</p></Link>
      </li>
    </ul>
  )
}

export default Nov