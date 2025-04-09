import "./global.css"
import styles from "./App.module.css"
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Siderbar } from "./components/Siderbar"
import { Comment } from "./components/Comment"

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          <Post
            author="Graziela"
            content="Uma cocota"
          />

          <Post
            author="Anderson"
            content="Um cocoto"
          />
        </main>
      </div>
    </>)
}

export default App
