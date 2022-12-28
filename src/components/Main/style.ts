import styled from "@emotion/styled";

export const Background = styled.div`
    background-image: url("/img/Background3.png");
    position: fixed;
    background-size: 100% 100%;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    z-index: 0;
`

export const NavLine = styled.div`
    margin: 30px 30px 0 0;
    background-image: url("/img/Bar.png");
    position: absolute; 
    right: 0;
    top: 0;
    width: 45px;
    height: 35px;
    background-size: 100%;
    background-repeat: no-repeat;
    cursor: pointer;
    z-index: 3;
`

export const Capsule = styled.div`
    margin: 0 auto;
    margin-top: 40vh;
    width: 30%;
    display: block;
`

export const CapsuleTxt = styled.div`
    color: #ffffff;
    font-size: 50px;
    text-align: center;
    @media screen and (max-width: 1300px) {
        font-size: 40px;
    }
    @media screen and (max-width: 1100px) {
        font-size: 32px;
    }
    @media screen and (max-width: 900px) {
        font-size: 24px;
    }
`

export const Button = styled.div<{display: string}>`
    position: relative;
    margin: 0 auto;
    margin-top: 40px;
    background-color: #ffffff;
    width: 15rem;
    height: 4.8rem;
    border-radius: 15px;
    display: ${(props) => props.display};
`

export const ArrowWrap = styled.div`
    height: 100%;
    margin: 0 27%;
`

export const Arrow = styled.div`
    height: 100%;
    background-image: url("/img/Arrow.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    cursor: pointer;
    :hover {
        transform: scale(1.15);
        transition-duration: 0.25s;
    }
`
















