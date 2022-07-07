import React from 'react';
import {
    Template,
    JudgeTem,
    TitleLogoDiv,
    TitleBig,
    TitleSmall,
    JudgeList,
    JudgeListTem,
} from './styledComponents'

const Home = () => {
    return (
        <div>
            <Template>
                <JudgeTem>
                    <TitleLogoDiv>
                        <TitleBig>
                            맛집 평가
                        </TitleBig>
                        <TitleSmall>
                            당신의 평가는 몇점?!
                        </TitleSmall>
                    </TitleLogoDiv>
                    <JudgeListTem>
                        <JudgeList>
                            하이
                        </JudgeList>
                    </JudgeListTem>
                </JudgeTem>
                </Template>
        </div>
    );
};

export default Home;