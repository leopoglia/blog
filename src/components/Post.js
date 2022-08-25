import '../index.css';

export default function Post() {
    return (
        <div className='post'>

            <div className='texto'>
                <div className='perfil'>
                    <img src='https://miro.medium.com/fit/c/20/20/1*yPhYY-wHnLlVOuNqft-hUw.jpeg' />
                    <p>Leonardo</p>
                </div>

                <div className='titulo'>Por que Dall-E não vai roubar meu emprego</div>
                <div className='descricao'>
                    Finalmente consegui experimentar. E posso garantir que é impossível criar imagens profissionais e úteis a partir de uma
                </div>


                <div className='informacoes'>
                    <div>
                        <div className='data'>24 de agosto</div>
                        <div className='classificacao'>• Java</div>
                    </div>

                    <div className='acoes'>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
            </div>
            <img className='post-imagem' src='https://miro.medium.com/fit/c/200/134/1*syf2qY1PXnJYeSA4vmSb0w.png' />
        </div>
    );
}