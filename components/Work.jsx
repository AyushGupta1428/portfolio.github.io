import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Projects = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className='text-center mb-2 text-lg font-Ovo'>
      My portfolio</motion.h4>

      <motion.h2
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='text-center text-5xl font-Ovo'>
      My Projects</motion.h2>

      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
      Welcome to my portfolio! Explore a collection of projects showcasing my expertise.</motion.p>

    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.9, duration: 0.6 }}
    className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
        {workData.map((project, index)=>(
            <motion.div
            
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative  group'
            style={{backgroundImage: `url(${project.bgImage})`}}>
                <div className='bg-black w-10/12 rounded-md absolute bottom-2 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold text-white'>{project.title}</h2>
                        <p className='text-sm text-white'>{project.description}</p>
                        <div className='flex items-center justify-center '>
                            {/* <a className=' text-white rounded-full flex items-center justify-center gap-2 border-[0.5px] hover:bg-blue-700 transition w-20' href="#work"></a> */}
                            <a className=' text-white  flex items-center justify-center  border-[0.5px] hover:bg-blue-900 transition w-40 mt-3' href={project.link}>View Repository</a>
                        </div>
                       
                    </div>
                   
                        
                    {/* <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                    </div> */}
                    
                </div>
                
            </motion.div>
            
        ))}
        
    </motion.div>

    {/* <motion.a 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 1.1, duration: 0.5 }}
    href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
        Show more 
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
    </motion.a> */}

    </motion.div>
  )
}

export default Projects
