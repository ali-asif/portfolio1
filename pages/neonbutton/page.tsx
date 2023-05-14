import styles from '../../styles/Page.module.css'


export default function Button() {
    return (
        <div className= 'justify-center pt-5 pl-7 ml-20 mr-15 pr-10' >
                   <a className={styles.button} href='https://www.fiverr.com/s/bGx0lP'>
                        <span></span>
                        <span></span> 
                        <span></span>
                        <span></span>
                        <p className='text-[2vw]'>
                        Hire me
                        </p>
                    </a>
        </div>
    )
}