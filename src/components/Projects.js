import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'
import pic5 from '../assets/pic5.png'
import pic6 from '../assets/pic6.png'
function Projects() {
  return (
    <div className='lg:section lg:mx-auto' id='project'>
        <div className='container   lg:mx-auto  pb-3'>
            <div className='grid lg:grid-cols-3 space-x-2 space-y-2 mx-auto cursor-pointer '>
            <motion.div className='bg-gray-100 p-1 rounded-lg'
                                    variants={fadeIn('right',0.5)}
                                    initial='hidden'
                                    whileInView='show'
                                    viewport={{once:false, amount:0.3}}
            >
                <div className='bg-white p-1 '>
                    <h1 className='text-black ml-32 font-extrabold text-lg'>Jumia-clone</h1>
                <img className='' src={pic6} alt=''/>
                </div>

                   
                    <div className='mt-2 space-x-2'>
                    <a href='https://jumia-clone-lilac.vercel.app/'><button className='btn btn-sm'>View project</button></a> 
                    <a href='https://github.com/Evan-cell/jumia-build'><button className='btn btn-sm'>source code</button></a>
                    </div>
                </motion.div>
                <motion.div className='bg-gray-100 p-1 rounded-lg'
                                        variants={fadeIn('right',0.5)}
                                        initial='hidden'
                                        whileInView='show'
                                        viewport={{once:false, amount:0.3}}
                >
                <div className='bg-white p-1'>
                    <h1 className='text-black ml-32 font-extrabold text-lg'>Bargain Duka</h1>
                <img src={pic1} alt=''/>
                </div>

                   
                    <div className='mt-2 space-x-2'>
                    <a href='https://bargain-duka.vercel.app/'><button className='btn btn-sm'>View project</button></a> 
                    <a href='https://github.com/Evan-cell/Bargain-Duka'><button className='btn btn-sm'>source code</button></a>
                    </div>
                </motion.div>
                <motion.div className='bg-gray-100 p-1 rounded-lg'
                                        variants={fadeIn('right',0.5)}
                                        initial='hidden'
                                        whileInView='show'
                                        viewport={{once:false, amount:0.3}}>
                <div className='bg-white p-1'>
                    <h1 className='text-black ml-32 font-extrabold text-lg'>Airbnb-clone</h1>
                <img src={pic2} alt=''/>
                </div>

                   
                    <div className='mt-2 space-x-2'>
                    <a href='https://airbnb-clone-tawny-ten.vercel.app/'><button className='btn btn-sm'>View project</button></a> 
                    <a href='https://github.com/Evan-cell/air'><button className='btn btn-sm'>source code</button></a>
                    </div>
                </motion.div>
                <motion.div className='bg-gray-100 p-1 rounded-lg'
                                        variants={fadeIn('right',0.5)}
                                        initial='hidden'
                                        whileInView='show'
                                        viewport={{once:false, amount:0.3}}
                >
                <div className='bg-white p-1'>
                    <h1 className='text-black ml-32 font-extrabold text-lg'>Afri-films</h1>
                <img src={pic3} alt=''/>
                </div>

                   
                    <div className='mt-2 space-x-2'>
                    <a href='https://afro-scenes.netlify.app/'><button className='btn btn-sm'>View project</button></a> 
                    <a href='https://github.com/Evan-cell/afro-scenes'><button className='btn btn-sm'>source code</button></a>
                    </div>
                </motion.div>
                <motion.div className='bg-gray-100 p-1 rounded-lg'
                                        variants={fadeIn('right',0.5)}
                                        initial='hidden'
                                        whileInView='show'
                                        viewport={{once:false, amount:0.3}}
                >
                <div className='bg-white p-1'>
                    <h1 className='text-black ml-32 font-extrabold text-lg'>Disney-clone</h1>
                <img src={pic5} alt=''/>
                </div>

                   
                    <div className='mt-2 space-x-2'>
                    <a href='https://github.com/Evan-cell/disney-hub'><button className='btn btn-sm'>View project</button></a> 
                    <a href='https://disney-build-4e805.web.app/home'><button className='btn btn-sm'>source code</button></a>
                    </div>
                </motion.div>
                <motion.div className='bg-gray-100 p-1 rounded-lg'
                                        variants={fadeIn('right',0.5)}
                                        initial='hidden'
                                        whileInView='show'
                                        viewport={{once:false, amount:0.3}}
                >
                <div className='bg-white p-1'>
                    <h1 className='text-black ml-32 font-extrabold text-lg'>Dashborad</h1>
                <img src={pic4} alt=''/>
                </div>

                   
                    <div className='mt-2 space-x-2'>
                    <a href='https://kimse-dashboard.netlify.app/'><button className='btn btn-sm'>View project</button></a> 
                    <a href='https://github.com/Evan-cell/dashboard'><button className='btn btn-sm'>source code</button></a>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Projects