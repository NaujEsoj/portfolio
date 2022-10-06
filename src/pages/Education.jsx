import fuaa from '../components/layout/assets/fuaa.png'
import cisco from '../components/layout/assets/cisco.png'
import udemy from '../components/layout/assets/udemy.png'
import udacity from '../components/layout/assets/udacity.png'
import fcc from '../components/layout/assets/fcc.png'

function Education() {
  return (
    <div id='education' className='flex flex-col h-auto'>
      <div className='text-center'>
        <h2 className='text-5xl text-accent m-8 mb-16'>
          <strong>Education</strong>
        </h2>
      </div>
      {/* education cards */}
      <div className='flex flex-col flex-wrap items-center'>
        <div className='lg:flex'>
          <div className="card md:m-10 mb-8 w-80 md:w-96 md:h-[32em] md:flex-col bg-secondary shadow-xl">
          <figure><img src={fuaa} alt="Shoes" /></figure>
          <div className="card-body border-accent border-t-4">
            <h2 className="card-title text-black">
              COMPUTER SYSTEMS ENGINEERING DEGREE
            </h2>
            <p className='text-black'>At: Fundacion universitaria del area Andina</p>
            <p className='text-black'>Bogota Colombia</p>
            <div className="card-actions justify-end">
              <div className="badge badge-primary">
                <a target='blank'
                   rel='noreferrer'
                   href="https://cms.areandina.edu.co/sites/default/files/2022-03/brochure-ingenieria-de-sistemas-virtual-areandina-2022.pdf">
                    See degree structure (spanish)
                </a>
              </div>
            </div>
          </div>
          </div>
          <div className="card md:m-10 w-80 mb-8 md:w-96 md:h-[32em] bg-secondary shadow-xl">
          <figure><img src={cisco} alt="Shoes" /></figure>
          <div className="card-body border-accent border-t-4">
            <h2 className="card-title text-black">
              PYTHON AND DEVNET POSTGRADUATE DIPLOMA
            </h2>
            <p className='text-black'>At: Fundacion universitaria del area Andina</p>
            <p className='text-black'>Cisco Networking Academy</p>
            <div className="card-actions justify-end">
              <div className="badge mt-4 badge-primary">
              <a target='blank'
                   rel='noreferrer'
                   href="https://www.netacad.com/courses/programming/pcap-programming-essentials-python">
                    See Python course
                </a>
              </div>
              <div className="badge badge-primary mt-4">
                <a target='blank'
                   rel='noreferrer'
                   href="https://www.netacad.com/courses/infrastructure-automation/devnet-associate">
                    See DevNet course
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-wrap justify-center md:flex-row lg:flex'>
          <div className="card md:m-10 w-80 mb-8 md:w-96 md:h-[32em] bg-secondary shadow-xl">
          <figure><img src={udemy} alt="Shoes" /></figure>
          <div className="card-body border-accent border-t-4">
            <h2 className="card-title text-black">
            REACT FRONT TO BACK 2022
            </h2>
            <p className='text-black'>Course by Brad Traversy</p>
            <div className="card-actions justify-end">
              <div className="badge badge-primary">
                <a target='blank'
                   rel='noreferrer'
                   href="https://www.udemy.com/course/react-front-to-back-2022">
                    See course
                </a>
              </div>
            </div>
          </div>
          </div>
          <div className="card md:m-10 w-80 mb-8 md:w-96 md:h-[32em] bg-secondary shadow-xl">
          <figure><img src={udacity} alt="Shoes" /></figure>
          <div className="card-body border-accent border-t-4">
            <h2 className="card-title text-black">
              JAVASCRIPT ES6
            </h2>
            <p className='text-black pt-4'>Javascript and the DOM</p>
            <p className='h-32 text-black justify-start'>Web Accessibility</p>
            <div className="card-actions justify-end">
              <div className="badge badge-primary">
                <a target='blank'
                   rel='noreferrer'
                   href="https://www.udacity.com/blog/2020/08/the-best-free-online-tech-courses.html">
                    See courses
                </a>
              </div>
            </div>
          </div>
          </div>
          <div className="card md:m-10 w-80 mb-8 md:w-96 md:h-[32em] bg-secondary shadow-xl">
          <figure><img src={fcc} alt="Shoes" /></figure>
          <div className="card-body border-accent border-t-4">
            <h2 className="card-title text-black">
              JAVASCRIPT ALGORITHMS AND DATA STRUCTURES
            </h2>
            <p className='text-black h-12'>Basic JavaScript</p>
            <p className='text-black h-12 justify-start'>JavaScript ES6</p>
            <p className='text-black h-12 justify-start'>Regular Expressions</p>
            <div className="card-actions justify-end">
              <div className="badge badge-primary">
                <a target='blank'
                   rel='noreferrer'
                   href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/">
                    See course
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
