import styles from '@/styles/Right.module.css'
const Right = () => {
    return (
        <div className={styles.right}>
            <div className={styles.rightTitle}>
                <div className={styles.title}>
                    <div className={styles.titleText1}>
                        OLIVIA RICHARDS
                    </div>
                    <div className={styles.titleText2}>
                        PROFESSIONAL TITLE
                    </div>
                </div>
            </div>
            <div className={styles.rightBody}>
                <div className={styles.rightBody1}>
                    <div className={styles.rightBodyTitle}>ABOUT ME</div>
                    <div className={styles.rightBodyLine}></div>
                    <div className={styles.rightText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quos sed expedita nostrum facere voluptas iste voluptates hic blanditiis adipisci pariatur reiciendis odit esse natus inventore alias laboriosam molestiae, illo temporibus. Tempore, vel facere quod eaque omnis atque id repudiandae?</div>
                    <div className={styles.rightBodyTitle2}>WORK EXPERIENCE</div>
                    <div className={styles.rightBodyLine}></div>
                    <div className={styles.rightText2}>
                        <div className={styles.rightTextLeft}>2012 - 2014</div>
                        <div className={styles.rightTextRight}>
                            <div className={styles.rightTextRight1}>JOB POSITION HERE</div>
                            <div className={styles.rightTextRight2}>COMPANY NAME - California , USA</div>
                            <div className={styles.rightTextRight3}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et aperiam natus molestias velit dolore est possimus repellat laborum quasi asperiores ex, a dolorem ad fugit?</div>
                        </div>
                    </div>
                    <div className={styles.rightText2}>
                        <div className={styles.rightTextLeft}>2012 - 2014</div>
                        <div className={styles.rightTextRight}>
                            <div className={styles.rightTextRight1}>JOB POSITION HERE</div>
                            <div className={styles.rightTextRight2}>COMPANY NAME - California , USA</div>
                            <div className={styles.rightTextRight3}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et aperiam natus molestias velit dolore est possimus repellat laborum quasi asperiores ex, a dolorem ad fugit?</div>
                        </div>
                    </div>

                </div>

            </div>
            <div className={styles.rightSkills}>
                <div className={styles.rightSkillsBox}>
                    <div className={styles.rightBodyTitle2}>SOFTWARE SKILLS</div>
                    <div className={styles.rightBodyLine}></div>
                    <div className={styles.skills}>
                        <div className={styles.skillsItem}>HTML</div>
                        <div className={styles.skillsItem}>CSS</div>
                        <div className={styles.skillsItem}>JAVASCRIPT</div>
                        <div className={styles.skillsItem}>REACT</div>
                        <div className={styles.skillsItem}>NEXT</div>
                        <div className={styles.skillsItem}>ANGULAR</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Right;