import React from 'react'

function Header() {
    return (
        <div>
        <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
           <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/2018_Linus_Tech_Tips_logo.svg/1024px-2018_Linus_Tech_Tips_logo.svg.png' className='w-10 object-contain'></img>
            <span className="ml-3 text-xl uppercase ">
            Misor Technology Limited</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 cursor-pointer hover:text-white">Home</a>
            <a className="mr-5 cursor-pointer hover:text-white">About</a>
            <a className="mr-5 cursor-pointer hover:text-white">Service</a>
            <a className="mr-5 cursor-pointer hover:text-white">Contact</a>
          </nav>
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Go Next
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
        </div>
    )
}

export default Header
