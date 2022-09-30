import feed from '../components/layout/assets/feedapp.png'
import calculator from '../components/layout/assets/cal.png'
import gitFinder from '../components/layout/assets/gitfin.png'
import loudnessMeter from '../components/layout/assets/lm.png'

function Projects() {
  return (
    <div id='projects' className='bg-secondary-content h-auto'>
      <div className='text-center'>
        <h2 className='text-5xl text-accent m-8 mb-16'>
          <strong>Projects</strong>
        </h2>
      </div>
      <div className='flex flex-col justify-center mb-16'>
        <div className="flex justify-center py-2 gap-2 flex-wrap">
          <a href="#item1" className="btn btn-xl">Marketplace</a>
          <a href="#item2" className="btn btn-xl">Github App</a>
          <a href="#item3" className="btn btn-xl">Feedback App</a>
          <a href="#item4" className="btn btn-xl">JS6 Calculator</a>
          <a href="#item5" className="btn btn-xl">Loudness meter</a>
        </div>
        <div className="carousel m-auto rounded-3xl w-full">
            <div id="item1" className="carousel-item w-full">
            <div className="hero bg-base-200">
              <div className="hero-content flex-col lg:flex-row">
                <img src="https://placeimg.com/400/400/arch" alt="marketplace preview" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold">Marketplace</h1>
                  <p className="py-6">In deployment</p>
                  <button className="btn btn-primary">...</button>
                </div>
              </div>
            </div>
            </div>
          <div id="item2" className="carousel-item w-full">
            <div className="hero bg-base-200">
              <div className="hero-content flex-col lg:flex-row">
                <img src={gitFinder} alt="github app preview" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold">Github App</h1>
                  <p className="py-6">This React app uses a RET API to retreive information over profiles on Github</p>
                  <a href="https://jjg-github-finder.netlify.app/" target='blank'
                   rel='noreferrer'><button className="btn btn-primary">Live Demo</button></a>
                </div>
              </div>
            </div>
          </div>
          <div id="item3" className="carousel-item w-full">
            <div className="hero bg-base-200">
              <div className="hero-content flex-col lg:flex-row">
                <img src={feed} alt="feedback app Preview" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold">Feedback App</h1>
                  <p className="py-6">React app to leave feedback for a product or service</p>
                  <a href="https://jjg-feedback-app.netlify.app/" target='blank'
                   rel='noreferrer'><button className="btn btn-primary">Live Demo</button></a>
                </div>
              </div>
            </div>
          </div>
          <div id="item4" className="carousel-item w-full">
            <div className="hero bg-base-200">
              <div className="hero-content flex-col lg:flex-row">
                <img src={calculator} alt="calculator preview" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold">JS Calculator</h1>
                  <p className="py-6">A calculator made in JS ES6.</p>
                  <a href="https://jjg-jscalculator.netlify.app/" target='blank'
                   rel='noreferrer'><button className="btn btn-primary">Live Demo</button></a>
                </div>
              </div>
            </div>
          </div>
          <div id="item5" className="carousel-item w-full">
            <div className="hero bg-base-200">
              <div className="hero-content flex-col lg:flex-row">
                <img src={loudnessMeter} alt="calculator preview" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold">Loudness Meter</h1>
                  <p className="py-6">Made with an ESP32 and micropython programming</p>
                  <a href="https://github.com/NaujEsoj/Loudness-Meter" target='blank'
                   rel='noreferrer'><button className="btn btn-primary">View Repository</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
