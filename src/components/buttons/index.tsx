"use client"
import styles from "./index.module.css";


type ButtonProps = {
    label: string;
    onClick: () => void;
};
const handleClick = () =>{
    console.log("winnie")
}
export const Button : React.FC<ButtonProps>  = ({ label, onClick }) => {

    return (
        <button className={styles.btn} onClick={handleClick}>
            {label}
        </button>
    );
};

