import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#FFDF00]'>
            Tentang
          </p>
          <h2 className='py-4'>Tentang Saya</h2>
          <p className='py-2 text-gray-600'>
          Sudah berpengalaman sebagai Front end Developer selama setengah tahun sebagai internship di PT 
          Telekomunikasi Indonesia, Tbk. Mengembangkan aplikasi website dengan bahasa javascript dan 
          framework NextJs. Meskipun begitu, saya tidak membatasi diri saya untuk mempelajari skill yang 
          baru. Bertanggung jawab melakukan problem solving untuk kasus-kasus bersama tim. Menyukai 
          explore mengenai pengembangan aplikasi website.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Ayo,lihat beberapa proyek terbaru saya.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
