import * as S from '../../styles/pages/home'
import Link from 'next/link';

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { About } from '../components/About';
import { Skills } from '../components/Skills';

import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import Head from 'next/head';

export default function Home(){
  return(
    <>
      <Head>
        <title>Leonardo Hernandes - Desenvolvedor Frontend</title>
        <meta name="description" content="Desenvolvedor Frontend especializado em criar interfaces web dinâmicas, 
          responsivas e de alto desempenho. Com experiência em HTML, CSS, JavaScript, React e outras tecnologias modernas, 
          foco na entrega de experiências de usuário excepcionais."
        />
      </Head>
      <Header />
        <S.Container> 
          <S.Banner>
            <S.WrapperBanner>
              <h1 className="glitch">
                <span aria-hidden="true">Leonardo Hernandes</span>
                Leonardo Hernandes
                <span aria-hidden="true">Leonardo Hernandes</span>
              </h1>
              <h2>Frontend Developer</h2>
              <S.SocialMedia>
                <Link aria-label='Conheça o meu Linkedin' href='https://www.linkedin.com/in/leonardo-hernandes/' target='blank'>
                  <div className='border'></div>
                  <FaLinkedinIn size={30}/>
                </Link>
                <Link aria-label='Conheça o meu GitHub' href='https://github.com/leonardohernandesq' target='blank'>
                  <div className='border'></div>
                  <FaGithub size={30}/>
                </Link>
                <Link aria-label='Fale comigo no Whatsapp' href='https://api.whatsapp.com/send/?phone=351922269284&type=phone_number&app_absent=0' target='blank'>
                  <div className='border'></div>
                  <FaWhatsapp size={30}/>
                </Link>
              </S.SocialMedia>
              <div className='effect-ball'>
              
              </div>
            </S.WrapperBanner>
          </S.Banner>

          <About />
          
          <Skills />

          <Experience />

          <Projects />

          <Contact />

          <Footer />
        </S.Container>
    </>
  );
}