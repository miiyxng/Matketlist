import React from 'react';
import {
    Template,
    JudgeTem,
} from './styledComponents'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WriteJudge from './WriteJudge';
import ShowJudge from "./ShowJudge";
import Header2 from './Header2';
import JudgeListTemplate from './JudgeListTemplate';
import PutListR from './PutListR';


const Home = () => {
    return (
        <div>
            <Template>
                <JudgeTem>
                    <Header2 />
                    <PutListR />
                <Router>
                        <Routes>
                            <Route path='/' element={<JudgeListTemplate />}></Route>
                            <Route path='/writed/:writedID' element={<WriteJudge></WriteJudge>}></Route>
                            <Route path='/show' element={<ShowJudge></ShowJudge>}></Route>
                        </Routes>
                </Router>
                </JudgeTem>
            </Template>
        </div>
    );
};

export default Home;