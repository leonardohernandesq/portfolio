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

export default function Home(){
  return(
    <>
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
                <Link href='https://www.linkedin.com/in/leonardo-hernandes/' target='blank'>
                  <div className='border'></div>
                  <FaLinkedinIn size={30}/>
                </Link>
                <Link href='https://github.com/leonardohernandesq' target='blank'>
                  <div className='border'></div>
                  <FaGithub size={30}/>
                </Link>
                <Link href='https://api.whatsapp.com/send/?phone=351922269284&type=phone_number&app_absent=0' target='blank'>
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