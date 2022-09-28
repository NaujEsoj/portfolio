import { HashLink } from 'react-router-hash-link'
import { FaLayerGroup } from 'react-icons/fa'

function Navbar() {
  return (

      <div className='flex md:flex-row shadow-lg bg-neutral  text-neutral-content navbar'>
        <div className='p-5 text-accent text-center md:text-center text-3xl md:w-1/2'>
          <HashLink smooth to='/'>Juan Jose Garcia</HashLink>
        </div>

      <div className='justify-end md:w-1/2 w-1/2'>
      {/* Burger Menu */}
      <div className="md:hidden flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost rounded-btn"> <FaLayerGroup /> </label>
            <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-200 rounded-box w-60 mt-1">
              <li><HashLink smooth to='#about'>About</HashLink></li>
              <li><HashLink smooth to='#abilities'>Abilities</HashLink></li>
              <li><HashLink smooth to='#education'>Education</HashLink></li>
              <li><HashLink smooth to='#projects'>Projects</HashLink></li>
              <li><HashLink smooth to='#contact'>Contact</HashLink></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className='hidden md:flex md:justify-around'>
        <ul className='mx-10'>
          <HashLink className='btn btn-ghost rounded-md' smooth to='#about'>About</HashLink>
          <HashLink className='btn btn-ghost rounded-md' smooth to='#abilities'>Abilities</HashLink>
          <HashLink className='btn btn-ghost rounded-md' smooth to='#education'>Education</HashLink>
          <HashLink className='btn btn-ghost rounded-md' smooth to='#projects'>Projects</HashLink>
          <HashLink className='btn btn-ghost rounded-md' smooth to='#contact'>Contact</HashLink>
        </ul>
      </div>
    </div>
    </div>




  )
}

export default Navbar
