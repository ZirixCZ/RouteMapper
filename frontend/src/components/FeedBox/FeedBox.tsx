import React from "react";
import styles from "./FeedBox.module.css";

const FeedBox = (props: any) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <img src={props.img} alt="vymol" />
            </div>
            <div className={styles.paragraphContainer}>
                <p className={styles.paragraph}>{props.description}</p>
            </div>
        </div>
    )

}

export default FeedBox;
