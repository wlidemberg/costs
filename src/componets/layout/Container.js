import styles from './container.module.css';

const Container = (props) => {
    return(
        <div className={`${styles.container} ${styles[props.custonClass]}`}>{props.children}</div>
    )
}

export default Container;