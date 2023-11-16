import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
      <header className='bg-slate-200 shadow-md'>
          <div className='flex items-center justify-between max-w-6xl mx-auto p-3'>    
          <div className="">
                <Link>
                    <h1 className='text-slate-500 font-bold text-sm sm:text-lg'>
                        Emino<span className='text-slate-700'>Estate</span>
                    </h1>
              </Link>
          </div>
        <form className="bg-slate-100 p-2  rounded-lg flex items-center gap-2">
            <input type='text' placeholder='Search...' className=' outline-none bg-transparent border-none w-24 sm:w-64'/>
            <FaSearch/>
              </form>
              <ul className='flex gap-4 '>
                  <Link to={'/'}>
                    <li className='hidden font-semibold hover:underline-offset-4 sm:inline text-slate-700 hover:underline'>Home</li>
                  </Link>
                  <Link to={'/about'}>
                     <li className='hidden font-semibold hover:underline-offset-4 sm:inline text-slate-700 hover:underline'>About</li>
                  </Link>
                  <Link to={'/sign-in'}>
                    <li className=' font-semibold hover:underline-offset-4 sm:inline text-slate-700 hover:underline'>Sign in</li>
                  </Link>
              </ul>
          </div>
    </header>
  )
}
