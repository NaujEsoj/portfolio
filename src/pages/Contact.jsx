import { FaGithubSquare, FaLinkedinIn,  } from 'react-icons/fa'
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";

function Conctact() {
  return (
    <div id='contact'>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md flex flex-col items-center">
            <h1 className="text-5xl font-bold">Wanna Talk <strong className='text-accent'>?</strong></h1>
            <p className="py-6">Please, feel free to contact me anytime</p>
            <div className='flex flex-col md:flex-row items-center'>
                <a className='flex m-4 items-center' target='blank' href="https://wa.me/573195619794"><AiOutlineWhatsApp className='text-lime-500' />+57&nbsp;319&nbsp;56&nbsp;9794</a>
                <a className='flex m-4 items-center' href="mailto:juanjosegarcia.zuluaga@gmail.com"><AiOutlineMail className='text-accent mr-1' />juanjosegarcia.zuluaga@gmail.com</a>
                <a className='flex m-4 items-center' target='blank' href="https://www.linkedin.com/in/juanjosegarc%C3%ADazuluaga/"><FaLinkedinIn className='text-primary mr-1' />/juanjosegarcíazuluaga</a>
                <a className='flex m-4 items-center' target='blank' href="https://github.com/NaujEsoj"><FaGithubSquare className='mr-1' />/NaujEsoj</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Conctact
