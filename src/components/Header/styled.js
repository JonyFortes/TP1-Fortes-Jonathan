import styled from 'styled-components'

const Container = styled.header`
    height: 500px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${require('../../assets/slide.png')});
    position: relative;

    h1 {
    font-size: 64px;
    color: #ffffff;
    position: absolute;
    left: 133px;
    bottom: 52px;
    }
`
export {Container}