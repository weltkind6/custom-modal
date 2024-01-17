import React, {useEffect} from "react";
import styles from './styles.module.css';

interface Props {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactNode;
}
const Modal = ({active, setActive, children}: Props) => {
    const onKeyDown = (e: KeyboardEvent) => {
        if(e.key === 'Escape') {
            setActive(false);
        }
    }

    useEffect(() => {
        if(active) {
            window.addEventListener('keydown', onKeyDown);
        }
    }, [active])

    return (
        <div
            className={`${styles.modal} ${active? styles.active : ''}`}
            onClick={() => setActive(false)}
        >
            <div
                className={styles.content}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
