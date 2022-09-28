import profile from '../components/layout/assets/profile.jpg'

export default function About() {
  return (
    <div id='about' className="flex flex-col h-auto md:flex-row">
      <div className='flex flex-col border-b-4 md:border-none md:w-1/2 border-primary avatar md: justify-center md:items-center p-10 md:p-20'>
        <div className='w-auto lg:w-auto max-w-md rounded-full ring ring-offset-base-100 ring-offset-4'>
          <img src={profile} alt="profile_picture" />
        </div>
        <div className='h-20 text-center md:h-auto md:w-auto'>
          <h2 className='pt-4 md:pt-8 text-xl'>Computer Systems Engineer</h2>
          <h2 className='pt-2 text-xl'>Frontend Developer</h2>
        </div>
      </div>
      <div className='flex justify-center md:p-auto md:w-1/2'>
        <div className='flex flex-col mt-14 text-center md:w-2/3 md:whitespace-pre-line md:text-right'>
          <div>
            <div className='m-4 text-left text-xl'>
              <p className='animate-bounce text-xl mb-10'><strong>Hello! Juan here.</strong></p>
              I love technology and computers.
              In my experience, I have fixed and set up computers since 2004 and have configured networks, servers, corporate setups and many other things too. Helping people with science and technology is my motivation, so I'm always willing to assist others.
            </div>
          </div>

          <p className='m-4 text-left text-xl'>
            I've been diving into <strong>Frontend</strong> since 2020, occasionally taking on freelance  opportunities. Currently looking for engaging projects with challenges and learnings.
          </p>
          <p className='m-4 text-left text-xl'>
            I'm planning to complement the basis of the Frontend with backend frameworks and technologies. Aiming to apply Python knowledge to emerging technologies such as artificial intelligence and data science.
          </p>
        </div>

      </div>
    </div>
  )
}
