import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Post } from '../components/Post';

import styles from './styles.module.css';
import '../global.css';

export function App() {
  return (
    <div>
      <Header/>
      <div className={ styles.wrapper }>
        <Sidebar/>
        <main>
          <Post/>
          <Post/>
        </main>
      </div>
    </div>
  )
}
