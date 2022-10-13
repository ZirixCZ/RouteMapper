import React from "react";
import {useNavigate} from "react-router-dom";
import ArrowLeft from "../../assets/svg/arrow.svg";
import styles from "./CreatePost.module.css";

const CreatePost = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img src={ArrowLeft} alt="sipka ukazujici doleva" onClick={() => navigate("/feed")} style={{cursor: 'pointer'}} />
                <div className={styles.postWrapper}>
                    <div className={styles.postPhoto}></div>
                    <div className={styles.postMap}></div>
                </div>
                <div className={styles.bottomContainer}>
                    <textarea placeholder="Zadejte popisek problému..."></textarea>
                    <div className={styles.bottomContainerButtonWrapper}>
                        <button>Přidat</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;
