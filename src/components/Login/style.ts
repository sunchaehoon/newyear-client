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
`

export const LoginBackground = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`

export const LoginWrap = styled.div`
    width: 26%;
    height: 540px;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 30px;
    padding: 55px 50px;
    display: block;
    text-align: center;
    z-index: 2;
`

export const LoginTxt = styled.div`
   display: flex;
   justify-content: center;
   margin-bottom: 70px;
`

export const LoginLO = styled.div`
    font-size: 4rem;
    color: #FF5A5A;
    padding-bottom: 7px;
    border-bottom: 1px solid black;
`

export const LoginGIN = styled.div`
    font-size: 4rem;
    color: #26971C;
    padding-bottom: 7px;
    border-bottom: 1px solid black;
`

export const InputDiv = styled.div`
    margin-top: 20px;
    display: block;
`

export const InputIdTxt = styled.div`
    text-align: left;
    color: #FF5A5A;
    font-size: 1.3rem;
    padding-left: 20px;
`

export const InputPwTxt = styled(InputIdTxt)`
    color: #26971C;
`

export const InputId = styled.input`
    margin-top: 5px;
    border-radius: 40px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    height: 35px;
    padding-left: 12px;
    font-size: 18px;
`

export const InputPw = styled(InputId)`
    font-family: 'Malgun gothic', dotum, sans-serif !important;
`

export const LoginCheck = styled.div`
    margin: 0 auto;
    margin-top: 40px;
    width: 50%;
    height: 50px;
`

export const LoginBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    height: 100%;
    cursor: pointer;
`

export const NoAccountWrap = styled.div`
    margin-top: 75px;
    display: flex;
    justify-content: center;
`

export const NoAccountTxt = styled.div`
    color: #525252;
    padding-right: 7px;
    font-size: 1.1rem;
`

export const Register = styled.div`
    color: #FF5A5A;
    font-size: 1.1rem;
    cursor: pointer;
`

export const NoInput = styled.div<{visibility: string}>`
    color: #FF5A5A;
    text-align: left;
    padding-top: 3px;
    padding-left: 10px;
    font-size: 0.8rem;
    visibility: ${(props) => props.visibility};
`

export const BackArrow = styled.div`
    background-image: url("/img/BackArrow.png");
    position: absolute;
    top: 0;
    left: 0;
    margin: 30px 0 0 20px;
    width: 50px;
    height: 40px;
    background-size: 100%;
    cursor: pointer;
    :hover {
        transform: scale(1.2);
        transition-duration: 0.3s;
    }
`




