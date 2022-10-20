import React from 'react'
import { Link } from "react-router-dom";
import './Apresentacao.css';
function Apresentacao() {
    return (
    <div className='container-apresentacao'>
        <div className='apresentacao-header'>
            <div className="img-logo"></div>
            <Link to="/login" className="text-decorator-none">
                <span>Venha Conhecer!</span>
            </Link>
        </div>
        <div className="apresentacao-banner">
            <div className="banner-logo">
            </div>
            <div className="banner-text">
                <h3>Bem-vindos ao Autonominas</h3>
            </div>
        </div>
        <div className="container-somos">
            <div className="title-section">
                <span>Quem Somos?</span>
            </div>
            <div className="text-section">
                <p>Autonominas é um projeto que nasce da junção de duas palavras: autonomia + minas. 
                    Tem como propósito empoderar meninas e mulheres brasileiras através do compartilhamento de conhecimentos e experiências, 
                    além da criação de uma rede de apoio fundamentada no respeito e na sororidade.</p>
            </div>
            <div className="title-section">
                <span>Nossa Causa?</span>
            </div>
            <div className="text-section">
                <p>
                    Descontrução de paradigmas sociais prejudiciais às mulheres. O empoderamento
                    femino e autonomia impactam na qualidade de vida da mulher na sociedade (desde
                    o trabalho, até mesmo à vida).
                    O motivo principal para promover a equidade de gênero é a garantia do direito
                    fundamental humano à ter emprego, renda justa e tratamento igualitário na
                    sociedade. A partir desse ponto, é importante descontruir e desmistificar a ideia de
                    que masculinidade pressupõe capacidade, competência, autoridade, superioridade
                    e direito ao poder.
                </p>
            </div>
        </div>
        <div className="container-colabs">
            <span>Nosso Colaboradores </span>
            <div className="colabs">
            <div className="card-colabs">
                <div className="colabs-fundo1">
                </div>
                <div className="colabs-img1">
                </div>
                <div className="colabs-infos">
                    <div className="infos-nome">
                        <span>Pedro Trudes</span>
                    </div>
                    <div className="infos-area">
                        <span>Dev Front-end</span>
                    </div>
                    <div className="infos-redes">
                    <a href="https://www.linkedin.com/in/pedrotrudes/" target="_blank">
                        <div className="rede linkedin"></div>
                    </a>
                    <a href="https://github.com/PedroTrudes" target="_blank">
                        <div className="rede git"></div>
                    </a>
                    </div>
                </div>
            </div>
            <div className="card-colabs">
                <div className="colabs-fundo1">
                </div>
                <div className="colabs-img2">
                </div>
                <div className="colabs-infos">
                    <div className="infos-nome">
                        <span>Gustavo</span>
                    </div>
                    <div className="infos-area">
                        <span>Dev Front-end</span>
                    </div>
                    <div className="infos-redes">
                    <a href="#" target="_blank">
                        <div className="rede linkedin"></div>
                    </a>
                    <a href="#" target="_blank">
                        <div className="rede git"></div>
                    </a>
                    </div>
                </div>
            </div>
            <div className="card-colabs">
                <div className="colabs-fundo1">
                </div>
                <div className="colabs-img3">
                </div>
                <div className="colabs-infos">
                    <div className="infos-nome">
                        <span>Pedro</span>
                    </div>
                    <div className="infos-area">
                        <span>Dev Front-end</span>
                    </div>
                    <div className="infos-redes">
                    <a href="#" target="_blank">
                        <div className="rede linkedin"></div>
                    </a>
                    <a href="#" target="_blank">
                        <div className="rede git"></div>
                    </a>
                    </div>
                </div>
            </div>
            <div className="card-colabs">
                <div className="colabs-fundo1">
                </div>
                <div className="colabs-img4">
                </div>
                <div className="colabs-infos">
                    <div className="infos-nome">
                        <span>Pedro</span>
                    </div>
                    <div className="infos-area">
                        <span>Dev Front-end</span>
                    </div>
                    <div className="infos-redes">
                    <a href="#" target="_blank">
                        <div className="rede linkedin"></div>
                    </a>
                    <a href="#" target="_blank">
                        <div className="rede git"></div>
                    </a>
                    </div>
                </div>
            </div>
            <div className="card-colabs">
                <div className="colabs-fundo1">
                </div>
                <div className="colabs-img5">
                </div>
                <div className="colabs-infos">
                    <div className="infos-nome">
                        <span>Pedro</span>
                    </div>
                    <div className="infos-area">
                        <span>Dev Front-end</span>
                    </div>
                    <div className="infos-redes">
                    <a href="#" target="_blank">
                        <div className="rede linkedin"></div>
                    </a>
                    <a href="#" target="_blank">
                        <div className="rede git"></div>
                    </a>
                    </div>
                </div>
            </div>    
            <div className="card-colabs">
                <div className="colabs-fundo1">
                </div>
                <div className="colabs-img6">
                </div>
                <div className="colabs-infos">
                    <div className="infos-nome">
                        <span>Pedro</span>
                    </div>
                    <div className="infos-area">
                        <span>Dev Front-end</span>
                    </div>
                    <div className="infos-redes">
                    <a href="#" target="_blank">
                        <div className="rede linkedin"></div>
                    </a>
                    <a href="#" target="_blank">
                        <div className="rede git"></div>
                    </a>
                    </div>
                </div>
            </div> 
            </div>
        </div>

    </div>
    )
}

export default Apresentacao