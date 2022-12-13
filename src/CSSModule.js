import styles from './CSSModule.module.css';


const CSSModule = () =>{
    
    return(
        <div className={`${styles.wrapper} ${styles.inverted}`}>
             안녕하세요, 저는 <span className="something">React</span>입니다.
        </div>

    );
}

export default CSSModule;