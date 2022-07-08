import React from 'react';
import {
    TitleLogoDiv,
    TitleBig,
    TitleSmall,
    ListTitle,
    PostTitle2,
} from './styledComponents'

const Header2 = () => {
    return (
        <div>
            <TitleLogoDiv>
                <TitleBig>
                    "나는 먹기 위해 산다"
                </TitleBig>
                <TitleSmall>
                    당신의 식당 평가는 몇점?!
                </TitleSmall>
                <ListTitle>
                    <PostTitle2>식당 별점</PostTitle2>
                    </ListTitle>
            </TitleLogoDiv>
        </div>
    );
};

export default Header2;