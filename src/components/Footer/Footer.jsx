import React from 'react'
import {Link} from 'react-router-dom';
import './Footer.css'


function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Fique por dentro de todas as novidades e promoções Veneno
            </p>
            <p className='footer-subscription-text'>
                Você pode se desinscrever a qualquer hora
            </p>
            <div className='input-areas'>
                <form className='input-areas' onSubmit={null}>
                    <input type='email' name='email' placeholder='Seu email' class="form-control"/>
                    <button class='btn btx-xs btn-success'>Inscrever-se</button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Sobre Nós</h2>
                    <Link to='/aboutus'>Quem Somos</Link>
                    <Link to='/aboutus#ourOperation'>Nossa operação</Link>
                    <Link to='/aboutus#'>Missão</Link>
                    <Link to=''>Investidores</Link>
                    <Link to=''>Terms of service</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Fale Conosco</h2>
                    <Link to=''>Contato</Link>
                    <Link to=''>Suporte</Link>
                    <Link to=''>Mande um email</Link>
                    
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Redes Sociais</h2>
                    <Link to='https://www.facebook.com/vnnentmt' target='_blank'>Facebook</Link>
                    <Link to='https://www.instagram.com/venenoentertainment/' target='_blank'>Instagram</Link>
                    <Link to='https://www.youtube.com/@mcveneno3528' target='_blank'>Youtube</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        <img src='images/logo.png' alt='logo'/>
                    </Link>
                </div>
                <small className='website-rights'>©Veneno 2024</small>
                <div className='social-icons'>
                    <Link className='social-icon-link facebook'
                     to='https://www.facebook.com/vnnentmt'
                     target='_blank'
                     aria-label="Facebook">
                        <i className='fab fa-facebook-f'></i>
                    </Link>
                    <Link className='social-icon-link facebook'
                     to='https://www.instagram.com/venenoentertainment/'
                     target='_blank'
                     aria-label="Instagram">
                        <i className='fab fa-instagram'></i>
                    </Link>
                    <Link className='social-icon-link facebook'
                     to='https://www.youtube.com/@mcveneno3528'
                     target='_blank'
                     aria-label="Youtube">
                        <i className='fab fa-youtube'></i>
                    </Link>
                </div>
            </div>

        </section>
    </div>
  )
}

export default Footer;
