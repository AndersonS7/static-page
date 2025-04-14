import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src="https://github.com/AndersonS7.png" />
                    <div className={styles.authorInfo}>
                        <strong>Anderson Silva</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='30 de março as 19:38' dateTime="2025-03-30 19:35:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketsea</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback!</strong>

                <textarea
                    placeholder='Deixe seu comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>

                <div className={styles.commentList}>
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </form>
        </article>
    )
}