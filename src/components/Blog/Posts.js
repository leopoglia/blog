import '../../index.css';

export default function Posts() {
    return (
        <div className='post'>

            <div className='texto'>
                <div className='perfil'>
                    <img src='https://avatars.githubusercontent.com/u/92129999?s=400&u=ecc83001b367e254f6e8812dbb4f65cb6f5bcf4d&v=4' />
                    <p>leocpx</p>
                </div>

                <div className='titulo'>Titulo</div>
                <div className='descricao'>
                    Texto
                </div>

                <div className='informacoes'>
                    <div>
                        <div className='data'>24 de agosto, 2022</div>
                        <div className='classificacao'>• Java</div>
                    </div>

                    <div className='acoes'>
                        <ion-icon className='coracao' name="heart-outline"></ion-icon>
                        <ion-icon className='salvo' name="bookmark-outline"></ion-icon>
                    </div>
                </div>
            </div>
            <img className='post-imagem' src='https://miro.medium.com/fit/c/200/134/1*syf2qY1PXnJYeSA4vmSb0w.png' />
        </div>
    );
}