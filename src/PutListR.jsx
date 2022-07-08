import React, { useState } from 'react';
import {
    PushButton,
    PutList,
    PutListTitle,
} from './styledComponents'

const PutListR = () => {
    return (
        <div>
                    <PutList>
                        <PutListTitle></PutListTitle>
                        <PushButton>
                            <span>ㅇㅣㅂㄹㅕㄱ</span>
                        </PushButton>
                    </PutList>
        </div>
    );
};

export default PutListR;