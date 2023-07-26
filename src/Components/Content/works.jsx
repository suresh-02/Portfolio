import React from 'react';
import { Link } from 'react-router-dom';

const Works = () => {

  return (
    <div className='flex flex-col h-[100vh] justify-center items-center' id='works'> 
        <>
        <h1   className="text-[#eb5939] text-6xl font-bold relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-[#00fd9a]
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">Works</h1>
        </>
        <main className='text-[16px] pt-[50px] md:mt-[80px] font-bold text-left  text-[#B7AB98] px-[40px]  w-[100%] h-max-content'>
        <p>I present some of the exciting frontend development projects I've worked on.I love to build and develop challenging, new applications. The best means <span className='text-[#eb5939]' >to become better at programming is by developing applications 
        that translate theory into something live and working.I'm always eager to take on new challenges and contribute to innovative projects. If you're interested in collaborating or have any questions, please don't hesitate to get in touch.</span> 
        In addition, this practice also adds to confidence, enhances code quality, and encourages documenting your journey.
        I'm currently improving my <span className='text-[#00df9a]' >HTML, CSS, JavaScript, and ReactJS</span> skills by developing front-end applications.
        </p>
        <div className=' md:flex justify-center items-center  py-[50px]'>
        <Link to="/projects" class="bg-transparent hover:bg-[#eb5939] text-[#eb5939] font-semibold hover:text-black py-2 px-4 border border-[#B7AB98] hover:border-transparent rounded after:transition duration-500 ease-in-out   transform hover:-translate-y-1 hover:scale-150">
            Projects
          </Link>
        </div>
        </main>
    </div>
  )
}

export default Works

// className="text-[#eb5939] text-6xl font-bold "