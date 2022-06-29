import styles from './Container.modules.css'

function Container(props) {
    return (<div Classname={`${styles.container} ${styles.customClass}`}>
                {props.children}
            </div>)
}

export default Container