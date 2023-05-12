import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import webdev from './webdev.png';
import styles from '../../styles/Page.module.css'

export default function Body () {
return (
        <div className='flex justify-between mt-28'>
            <div className='grid justify-items-start py-12 pl-20'>
            <p className="text-5xl ">I am  <strong> ALI-ASIF </strong> <br className='whitespace-pre-line'/> I am a </p>
            <p className='text-5xl text-blue-700 font-bold'>
            <Typewriter 
            options={{
                strings: ['Web Developer', 'React-Native Developer', 'Mern-Stack'],
                autoStart: true,
                loop: true,
                }}
            />
            </p> 
            <div className='py-6'>  
            <a  className = {styles.button} href='https://www.fiverr.com/s/bGx0lP'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Hire me
            </a>
            </div>
            </div>
            <div className='flex-end '>
                <Image className='animate-bounce  '  src={webdev} alt="" height={600} width={600} />
            </div>
        </div>
        
    )
}