/* eslint-disable @next/next/no-img-element */
import * as S from '../../../styles/components/contact';
import { Title } from '../Title';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link';


export function Contact(){
    return(
        <S.Container>
            <S.Wrapper id='contato'>
                <Title>Contato</Title>
                
                <S.ContactContainer>
                    <div>
                        <img src="projectmockup.jpg" alt="Imagem" />
                    </div>
                    <div>
                        <p>
                            Fique a vontade para entrar em contato comigo. Estou sempre aberto para discutir novos desafios, ideias criativas ou oportunidades de crescimento profissional.
                            <br/>
                            <br/>
                            Estamos disponíveis também para iniciarmos um novo projeto e impulsionar as suas vendas e aumentar a sua visibilidade! Entre em contato. 

                        </p> 
                        <S.SocialMediaDiv>
                            <Link aria-label='Conheça o meu Linkedin' href='https://www.linkedin.com/in/leonardo-hernandes/' target='blank'>
                                <FaLinkedinIn size={30}/>
                            </Link>
                            <Link aria-label='Conheça o meu GitHub' href='https://github.com/leonardohernandesq' target='blank'>
                                <FaGithub size={30}/>
                            </Link>
                            <Link aria-label='Converse comigo no Whatsapp' href='https://api.whatsapp.com/send/?phone=351922269284&type=phone_number&app_absent=0' target='blank'>
                                <FaWhatsapp size={30}/>
                            </Link>
                        </S.SocialMediaDiv>
                    </div>
                </S.ContactContainer>
            </S.Wrapper>
        </S.Container>
    );
}