/* eslint-disable @next/next/no-img-element */
import * as S from '../../../styles/components/contact';
import { Title } from '../Title';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'

export function Contact(){
    return(
        <S.Container>
            <S.Wrapper>
                <Title>Contato</Title>
                
                <S.ContactContainer>
                    <div>
                        <img src="projectmockup.jpg" alt="Imagem" />
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque eu eros sit amet malesuada.
                            Vestibulum quis est aliquet, lobortis diam et, dictum tortor. Morbi in euismod felis, vel posuere sem.
                            Maecenas ut quam ut purus efficitur elementum. In tempus eget ex sit amet placerat. Duis ac metus vel massa malesuada pellentesque.
                            Vestibulum vitae suscipit libero. Praesent auctor nisi et eros dapibus sodales.
                            Ut condimentum venenatis erat et dictum. Integer eget lacus a orci dignissim sodales.
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque eu eros sit amet malesuada.
                            Vestibulum quis est aliquet, lobortis diam et, dictum tortor. Morbi in euismod felis, vel posuere sem.

                        </p>
                        <S.SocialMediaDiv>
                            <a href='#'>
                                <FaLinkedinIn size={25}/>
                            </a>
                            <a href='#'>
                                <FaGithub size={25}/>
                            </a>
                            <a href='#'>
                                <FaWhatsapp size={25}/>
                            </a>
                        </S.SocialMediaDiv>
                    </div>
                </S.ContactContainer>
            </S.Wrapper>
        </S.Container>
    );
}