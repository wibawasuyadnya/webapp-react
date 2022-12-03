import styled from 'styled-components';

    const ToggleButton = styled.a`
        position: fixed;
        top: 5%;
        right: 2rem;

        @media (max-width: 600px) {
        position: absolute;
        top: 4%;
        right: 1.5rem;
        }
    `

  export default ToggleButton ;
