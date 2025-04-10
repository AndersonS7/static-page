import styles from './Siderbar.module.css'
import { PencilLine } from 'phosphor-react'

export function Siderbar() {
    return (
        <aside className={styles.siderbar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/AndersonS7.png" />
                <strong>Anderson Silva</strong>
                <span>Web developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}