import { createGlobalStyle } from 'styled-components';

//yarn add styled-reset
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
    ${reset}
`;