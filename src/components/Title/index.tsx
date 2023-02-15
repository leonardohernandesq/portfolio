import * as S from '../../../styles/components/title';
import { ReactNode } from 'react'

interface IPropsChildren {
    children: ReactNode
}


export function Title({children}:IPropsChildren){
    return(
        <>
            <S.Title>{children}</S.Title>
        </>
    );
}