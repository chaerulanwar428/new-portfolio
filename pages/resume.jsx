import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Chaerul Anwar | Daftar Riwayat Hidup</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Daftar Riwayat Hidup</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Chaerul Anwar</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/chaerul-anwar-219182267/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/chaerulanwar428'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Web Developer{' '}
              <span className='px-1'>|</span> Information Technology Specialist
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Web Developer</p>
            <p className='py-2'>Information Technology Specialist</p>
          </div>
        </div>
        <p>
        Sudah berpengalaman sebagai Front end Developer selama setengah tahun sebagai internship di PT 
        Telekomunikasi Indonesia, Tbk. Mengembangkan aplikasi website dengan bahasa javascript dan 
        framework NextJs. Meskipun begitu, saya tidak membatasi diri saya untuk mempelajari skill yang 
        baru. Bertanggung jawab melakukan problem solving untuk kasus-kasus bersama tim. Menyukai 
        explore mengenai pengembangan aplikasi website.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Keahlian</h5>
          <p className='py-2'>
            <span className='font-bold'>Hard skill</span>
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Tailwind
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Pengalaman Kerja
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Magang
            </span>
            <span className='px-2'>|</span>Telekomunikasi Indonesia, Tbk
          </p>
          <p className='py-1 italic'>Front End Web Developer (April 2023 - Oktober 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Mengembangkan aplikasi website menggunakan NextJs.
            </li>
            <li>
              Mengelola daftar tugas proyek dengan menggunakan Jira.
            </li>
            <li>
              Melakukan version control dan kolaborasi tim menggunakan Gitlab.
            </li>
            <li>
              Menyesuaikan pengembangan website yang sudah terdesign di Figma.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
