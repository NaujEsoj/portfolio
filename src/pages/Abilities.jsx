import { FaGitAlt, FaCss3Alt, FaHtml5, FaJsSquare, FaNpm, FaGithubSquare, FaReact, FaUniversalAccess } from 'react-icons/fa'
import { SiTailwindcss } from "react-icons/si"
import code from '../components/layout/assets/code2.png'
import tools from '../components/layout/assets/tools.jpg'
import lang from '../components/layout/assets/lang.jpg'

function Abilities() {
  return (
    <div id='abilities' className='bg-secondary-content h-auto'>
      <div className='text-center'>
        <h2 className='text-5xl text-accent m-8 mb-16'>
          <strong>Abilities</strong>
        </h2>
      </div>
      <div className='flex flex-col md:flex-row items-center  md:justify-around h-auto mb-12'>
        <div className='md:w-[30%] w-4/5'>
          <div className="hero rounded-3xl bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
              <img src={code} alt="coding-capabilities" className="max-w-sm hidden 2xl:flex rounded-lg shadow-2xl" />
              <div className='h-96'>
                <h1 className="text-5xl text-center font-bold"><strong className='text-accent'>&#123;</strong>  Code <strong className='text-accent'>&#125;</strong> </h1>
                <div className="flex flex-wrap content-center justify-around py-12">
                  <div className='w-1/2 flex flex-col items-center'>
                    <FaHtml5 className='inline pr text-7xl' />
                    <p className='items-center pt-1'>HTML 5</p>
                  </div>
                  <div className='w-1/2 flex flex-col items-center'>
                    <FaCss3Alt className='inline text-7xl' />
                    <p className='items-center pt-1'>CSS 3</p>
                  </div>
                  <div className='w-1/2 flex flex-col mt-2 items-center md:mt-6'>
                    <FaJsSquare className='inline pr-2 text-7xl' />
                    <p className='items-center pt-1'>JS ES6</p>
                  </div>
                  <div className='w-1/2 flex flex-col mt-2 items-center md:mt-6'>
                    <FaReact className='inline pr-2 text-7xl' />
                    <p className='items-center pt-1'>REACT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-[30%] w-4/5 mt-10 md:mt-1'>
          <div className="hero rounded-3xl bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
              <img src={tools} alt="code-tools" className="hidden 2xl:flex rounded-lg shadow-2xl" />
              <div className='h-96'>
                <h1 className="text-5xl text-center inline-block font-bold">Tools<strong className='text-accent'>.</strong></h1>
                <div className="flex flex-wrap content-center justify-around py-10">
                  <div className='w-1/3 flex flex-col items-center mt-6'>
                    <FaGitAlt className='inline pr text-7xl' />
                    <p className='items-center pt-1'>GIT</p>
                  </div>
                  <div className='w-1/3 flex flex-col items-center mt-6'>
                    <FaGithubSquare className='inline pr text-7xl' />
                    <p className='items-center pt-1'>GITHUB</p>
                  </div>
                  <div className='w-1/3 flex flex-col items-center mt-6'>
                    <FaNpm className='inline pr text-7xl' />
                    <p className='items-center pt-1'>NPM</p>
                  </div>
                  <div className='w-1/3 flex flex-col items-center mt-6'>
                    <SiTailwindcss className='inline pr text-7xl' />
                    <p className='items-center pt-1'>TAILWIND</p>
                  </div>
                  <div className='w-/13 flex flex-col items-center mt-6'>
                    <FaUniversalAccess className='inline pr text-7xl' />
                    <p className='items-center pt-1'>ACCESIBILITY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-[30%] w-4/5 mt-10 md:mt-1'>
          <div className="hero rounded-3xl bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
              <img src={lang} alt="languajes" className="md:max-w-sm rounded-lg hidden 2xl:flex shadow-2xl" />
              <div className='h-96'>
                <h1 className="text-5xl font-bold m-auto">Languages<strong className='text-accent'>.</strong></h1>
                <div className='flex flex-col items-center'>
                  <div className='w-1/2 flex flex-col items-center mt-14'>
                    <p className='text-2xl'>English:</p>
                    <p className='text-4xl border-b-2'>B2</p>
                  </div>
                  <div className='w-1/2 flex flex-col items-center mt-6'>
                    <p className='text-2xl m-2'>Spanish:</p>
                    <p className='text-2xl border-b-2'>Native</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Abilities
