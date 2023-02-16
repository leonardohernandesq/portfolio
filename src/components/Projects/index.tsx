/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import * as S from '../../../styles/components/projects'
import { Title } from '../Title';
import { FiLink, FiGithub } from 'react-icons/fi'
import { project } from '../../hooks/useProjects'

export function Projects(){
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [minPageLimit, setMinPageLimit] = useState(0);

    return(
        <S.Container>
            <S.Wrapper id='project'> 
                <Title>Projetos</Title>
                <section>
                    {
                        project.map((item, index) => {
                            return(
                                <S.ArticleProject key={item.id}>
                                    <S.ImageProject>
                                        <img src={item.background} alt="teste" />
                                        <div>
                                            {item.title}
                                        </div>
                                    </S.ImageProject>

                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <S.DivButton>
                                        <S.ButtonProject href={item.linkproject} target='blank'>
                                            <FiLink size={20}/>
                                            Ver Projeto
                                        </S.ButtonProject>
                                        <S.ButtonProject href={item.linkgithub} target='blank'>
                                            <FiGithub size={20}/>
                                            Ver no GitHub
                                        </S.ButtonProject>
                                    </S.DivButton>
                                </S.ArticleProject>
                            );
                        })
                    }
                </section>
            </S.Wrapper>
        </S.Container>
    );
}