import { useEffect, useState,  } from "react"
import { BsFillArrowUpSquareFill } from "react-icons/bs"
import { classNames } from '../../utils/className'

export const ScrollToTop = () => {
  const [visible, setVisible]  = useState(false)

  const toggleVisibility = () => {
    if(window.pageYOffset > 300) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }


  },[])

  return (
    <div className='fixed bottom-2 right-2 md:bottom-8 md:right-8'>
      <button type="button" onClick={scrollToTop} className={classNames(
        visible ? 'opacity-100' : 'opacity-0',
        'inline-flex items-center p-3 rounded-full, shadow-sm text-white bg-accent transitio-opacity hover:bg-orange-900 focus:outline-none focus:ring-2 Focus:ring-offset-2 focus:ringorange-500'
      )}>
        <BsFillArrowUpSquareFill className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )

}