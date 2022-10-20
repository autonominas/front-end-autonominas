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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus maiores earum in accusantium 
                    aperiam quasi velit, fugiat iusto cum, doloremque beatae reiciendis quae, natus sequi placeat amet facilis corporis.</p>
            </div>
            <div className="title-section">
                <span>Nossa Causa?</span>
            </div>
            <div className="text-section">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam 
                    velit eum earum sed similique ipsum eius quia ab minus deserunt, quos optio assumenda magni 
                    ea aperiam ad totam non. Quisquam!</p>
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
                        <span>Full stack</span>
                    </div>
                    <div className="infos-redes">
                    <a href="https://www.linkedin.com/in/gustavo-macedo-de-lima/" target="_blank">
                        <div className="rede linkedin"></div>
                    </a>
                    <a href="https://github.com/gustavomlima9393" target="_blank">
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
                        <span>Larissa Nogueira</span>
                    </div>
                    <div className="infos-area">
                        <span>Dev Backend</span>
                    </div>
                    <div className="infos-redes">
                    <a href="https://www.linkedin.com/in/nogueirarissa/" target="_blank">
                        <div className="rede linkedin"></div>
                    </a>
                    <a href="https://github.com/nogueirarissa" target="_blank">
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
                        <span>Isabella Brandão</span>
                    </div>
                    <div className="infos-area">
                        <span>Full stack</span>
                    </div>
                    <div className="infos-redes">
                    <a href="https://www.linkedin.com/in/isabella-brandao/" target="_blank">
                        <div className="rede linkedin"></div>
                    </a>
                    <a href="https://github.com/bellabrandoni" target="_blank">
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
                        <span>Eduardo</span>
                    </div>
                    <div className="infos-area">
                        <span>Full stack</span>
                    </div>
                    <div className="infos-redes">
                    <a href="https://www.linkedin.com/in/eduardo-cordeiro-dos-santos-31a4291a1/" target="_blank">
                        <div className="rede linkedin"></div>
                    </a>
                    <a href="https://github.com/Edusan17" target="_blank">
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
                        <span>Larissa Rodrigues</span>
                    </div>
                    <div className="infos-area">
                        <span>Full stack</span>
                    </div>
                    <div className="infos-redes">
                    <a href="https://www.linkedin.com/in/larissa-rodrigues-b44869181/" target="_blank">
                        <div className="rede linkedin"></div>
                    </a>
                    <a href="https://github.com/LarissaRodrigues99/" target="_blank">
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