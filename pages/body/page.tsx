import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import webdev from './webdev.png'



export default function Body () {
return (
        <div>
            <div className='grid justify-items-start flex align-middle my-8 .py-5'>
            <p className="text-5xl ">I am  <strong> ALI-ASIF </strong> <br/> I am a </p>
            <Typewriter 
            options={{
                strings: ['Web Developer', 'React-Native Developer', 'Mern Stack'],
                autoStart: true,
                loop: true,
                }}
            />
            </div>
            <div className='grid justify-items-end'>
                <Image className='animate-bounce  '  src={webdev} alt="" height={700} width={700} />
            </div>
        </div>
        
    )
}