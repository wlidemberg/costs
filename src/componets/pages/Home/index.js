import styles from './Home.module.css';
import mesa from '../../../img/mesa.png'
import LinkButton from '../../layout/LinkButton';

export default function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem Vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to='/newproject' text='Create New Project'/>
            <img src={mesa} alt={`imagem ${mesa} de projetos`}/>
        </section>
    )
}