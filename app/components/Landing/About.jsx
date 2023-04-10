  'use client'

import React, {useEffect} from 'react';
import Link from 'next/link';

// import next/image
  import Image from 'next/image';
  // import hero image
import AboutImg from '../../../public/assets/countvote.jpg'

// import animations and framer-motion
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PictureAnimation, ProjAnimation } from '../../../utils/animation';

const About = () => {
  const controls = useAnimation();
  const {ref, inView} = useInView();
  useEffect(()=>{
    if(inView){
      controls.start('show')
    }
    else{
      controls.start('hidden')
    }
  }, [controls, inView])
  return (
    <motion.div id='about' ref={ref} variants={ProjAnimation} initial='hidden' animate={controls} className='section w-full md:h-screen p-2 flex items-center py-10'>
      <div className='container max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <motion.div className='col-span-2'>
          <h2 className='uppercase text-xl md:text-2xl tracking-widest text-[#5651e5]'>
            About Sabi Vote</h2>
          <p className='pt-4 md:pb-4  text-gray-600'>
            Sabi vote is an online election process solution to that provides services like online voting, live vote counting, voters solution,
            It provides an avenue for credible, transparent and fair election process, free from fraud, vote buying or other form of electoral mal-practices
          </p>
          <p className='pt-3 md:pb-6 text-gray-600'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea accusamus repellat labore sint nihil aperiam repellendus omnis, voluptates maiores impedit deleniti qui autem officiis laudantium, alias necessitatibus distinctio beatae dicta?
          </p>
          <Link href='/signin'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Click to try.
            </p>
          </Link>
        </motion.div>
        <motion.div variants={PictureAnimation} className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-1 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} priority className='rounded-xl' alt='count vote image' />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
