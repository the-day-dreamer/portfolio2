import styles from '@/styles/Left.module.css'
import Image from 'next/image';
import person from '../public/person.jpg'
const Left = () => {
    return (
        <div className={styles.left}>
            <div className={styles.leftImage}>
                <Image src={person} fill objectFit='cover' />
            </div>
            <div className={styles.leftEducation}>EDUCATION</div>
            <div className={styles.leftLine}>
                <div className={styles.line}></div>
            </div>
            <div className={styles.leftText}>
                <div className={styles.text1}>ENTER YOUR MAJOR1</div>
                <div className={styles.text2}>Name of university</div>
                <div className={styles.text2}>2005-2009</div>
                <div className={styles.text1}>ENTER YOUR MAJOR2</div>
                <div className={styles.text2}>Name of university</div>
                <div className={styles.text2}>2005-2009</div>
            </div>
            <div className={styles.leftEducation}>REFERENCE</div>
            <div className={styles.leftLine}>
                <div className={styles.line}></div>
            </div>
            <div className={styles.leftText}>
                <div className={styles.text1}>Sara Taylor</div>
                <div className={styles.text2}>Director - Company Name</div>
                <div className={styles.text2}>T : +123456789</div>
                <div className={styles.text1}>Aman Raj</div>
                <div className={styles.text2}>CEO - Comapny name</div>
                <div className={styles.text2}>T : +123456789</div>
            </div>
            <div className={styles.leftPhone}>
                <div className={styles.leftYellow}></div>
                <div className={styles.leftBlack}>Phone</div>

            </div>
            <div className={styles.leftPhoneNo}>+000111222333</div>
            <div className={styles.leftPhone}>
                <div className={styles.leftYellow}></div>
                <div className={styles.leftBlack}>Email</div>

            </div>
            <div className={styles.leftPhoneNo}>name@gmail.com</div>
            <div className={styles.leftPhone}>
                <div className={styles.leftYellow}></div>
                <div className={styles.leftBlack}>Website</div>

            </div>
            <div className={styles.leftPhoneNo}>domain.com</div>
            <div className={styles.leftPhone}>
                <div className={styles.leftYellow}></div>
                <div className={styles.leftBlack}>Address</div>

            </div>
            <div className={styles.leftPhoneNo}>your street address</div>
        </div>
    );
}

export default Left;