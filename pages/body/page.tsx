import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import webdev from './webdev.png';


export default function Body() {
    return (
        <div>
        <div className='flex justify-between max-[660px]:flex-wrap  max-[660px]:justify-center	 mt-28 '>
            <div className='min-[661px]:grid flex justify-items-start max-[660px]:flex-col max-[660px]:flex-wrap  pt-0 pl-2 pb-20 pl-0  mr- 20'>
                <p className="text-[3.5vw] ">I am  <strong> ALI-ASIF </strong> <br className='whitespace-pre-line' /> I am a </p>
                <p className='text-[2.0vw] text-emerald-500 font-bold'>
                    <Typewriter
                        options={{
                            strings: ['Web Developer', 'ui-ux Designer' , 'Mern-Stack Dev', 'Dev-Ops'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </p>
                {/* <div className='py-2 flex justify-between .min-w-0 .min-w-100 max-[660px]:flex-wrap  max-[660px]:justify-center	 mt-10'> */}
                    {/* <a className={styles.button} href='https://www.fiverr.com/s/bGx0lP'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <p className='text-[2vw]'>
                        Hire me
                        </p>
                    </a> */}
                {/* </div> */}
            </div>
            <div className='flex-end ml-50'>
                <Image className='animate-bounce img max-[660px]:w-[70vw] ml-8 mr-8 pr-2' src={webdev} alt="" height={500} width={600} />
            </div>
                
        </div>
        </div>            
    )
}