import React from "react";
import {useNavigate} from "react-router-dom";
import ArrowLeft from "../../assets/svg/arrow.svg";
import Map from "../../assets/svg/Group 3.svg";
import Image from "../../assets/svg/Group 4.svg";
import styles from "./CreatePost.module.css";

const CreatePost = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img src={ArrowLeft} alt="sipka ukazujici doleva" onClick={() => navigate("/feed")} style={{cursor: 'pointer'}} />
                <div className={styles.postWrapper}>
                    <div className={styles.postPhoto}><img src={Image} alt="vyberte obrazek" /></div>
                    <div className={styles.postMap}><img src={Map} alt="vyberte z mapy" /></div>
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
