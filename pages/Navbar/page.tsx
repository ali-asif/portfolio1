import { ColorModeSwitcher } from '../theme'

// import  Body  from '../body/page';
// import { background } from '@chakra-ui/react';
// import { color } from 'framer-motion';


export default function Navbar() {

  return (
      <header style={{color: 'black'}} className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-red text-sm py-4 dark:bg-gray-800">
        <nav style={{background: 'black'}} className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <img className ="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
        <div className="flex items-center justify-between">
          <p>---</p>
          <a  style={{color: 'white'}} className="inline-flex items-center gap-x-2 text-xl font-bold dark:text-white" href="#">
            Portfolio
          </a>
        <div className="sm:hidden">
          <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-image-and-text-1" aria-controls="navbar-image-and-text-1" aria-label="Toggle navigation">
            <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </div>
      </div>
        <div id="navbar-image-and-text-1" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
        <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
        <a className="font-medium text-blue-500" href="#" aria-current="page">Home</a>
        <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">About me</a>
        <ColorModeSwitcher />
      </div>
      </div>
    </nav>
   </header>
  )
}