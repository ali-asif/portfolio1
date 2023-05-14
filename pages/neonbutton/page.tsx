import styles from '../../styles/Page.module.css'


export default function Button() {
    return (
        <div className= 'justify-center ml-20' >
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