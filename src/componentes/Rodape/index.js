import styles from './Rodape.module.css';
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg';
export default function Rodape({ post }) {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />
            Desenvolvido por Davi Borges Sistemas
        </footer>
    )
}
