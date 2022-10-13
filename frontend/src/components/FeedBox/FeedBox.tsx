import React from "react";
import ArrowUp from "../../assets/svg/arrowUp.svg";
import ArrowDown from "../../assets/svg/arrowDown.svg";
import Line from "../../assets/svg/Line.svg";
import styles from "./FeedBox.module.css";

const FeedBox = (props: any) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <img src={props.img} alt="vymol" />
            </div>
            <div className={styles.paragraphContainer}>
                <p className={styles.paragraph}>{props.description}</p>
                <div className={styles.buttonContainer}>
                    <img src={ArrowUp} alt="upvote button" />
                    <p>{props.downvotes}</p>
                    <img src={ArrowDown} alt="downvote button" />
                    <p>{props.upvotes}</p>
                </div>
            </div>
            <div className={styles.divider}>
                <img src={Line} alt="linka" />
            </div>
        </div>
    )

}

export default FeedBox;
