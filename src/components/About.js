import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants'
const About = () => {
  const [ref,inView] = useInView({
    threshold: 0.5,
  })
  return <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-6 lg:flex-row lg:items-center lg:gap-x-10 lg:gap-y-0 h-screebn
      '>
        <motion.div 
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView='show'
        viewport={{once:false, amount:0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[540px] mix-blend-lighten bg-top rounded-full'></motion.div>
        <motion.div className='flex-1'>
          
          <h2 className='h2 text-accent'>About me</h2>
          <h3 className='h3 mb-4'>I am a multifaceted developer and designer, skilled in frontend and backend development, blockchain technology, and Android/iOS app development. 
          </h3>
          <p className='mb-6'>
            My diverse technical proficiency and design acumen guarantee robust functionality and visually appealing user experiences. I am a versatile and dedicated professional, capable of overcoming complex technical challenges and delivering polished, user-centric solutions across various domains.
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div className=''>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ?
                  <CountUp start={0} end={2} duration={3}/>: null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br/>
                  Experience
                </div>
              </div>
              <div className=''>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ?
                  <CountUp start={0} end={100} duration={3}/>: null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br/>
                  Completed
                </div>
              </div>
              <div className=''>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ?
                  <CountUp start={0} end={70} duration={3}/>: null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br/>
                  Clients
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>My Portfolio</a>
            </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
