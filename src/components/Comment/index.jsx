import { Trash } from '@phosphor-icons/react/dist/ssr';
import styles from './styles.module.css';
import { ThumbsUp } from '@phosphor-icons/react';

export function Comment() {
    return(
        <div className={ styles.comment }>
            <img src="https://github.com/itsV1tor.png"/>

            <div className={ styles.commentBox }>
                <div className={ styles.commentContent }>
                    <header>
                        <div className={ styles.authorAndTime }>
                            <strong>Vitor Santos</strong>
                            <time title='11 de maio ás 08:14h' dateTime='2022-05-11'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={ 20 }/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}