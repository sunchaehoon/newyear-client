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

export const SignupBackground = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SignupWrap = styled.div`
    width: 30%;
    height: 540px;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 30px;
    padding: 55px 50px;
    display: block;
    text-align: center;
`

export const SignupTxt = styled.div`
   display: flex;
   justify-content: center;
`

export const Signup회원 = styled.div`
    font-size: 3.7rem;
    color: #FF5A5A;
    padding-bottom: 7px;
    border-bottom: 1px solid black;
    margin-bottom: 15px;
`

export const Signup가입 = styled(Signup회원)`
    color: #26971C;
`

export const InputDiv = styled.div`
    margin-top: 10px;
    display: block;
`

export const InputTxt = styled.div`
    text-align: left;
    color: #525252;
    font-size: 1.3rem;
    padding-left: 20px;
`

export const Input = styled.input`
    margin-top: 5px;
    border-radius: 40px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    height: 35px;
    padding-left: 12px;
    font-size: 18px;
`

export const InputPw = styled(Input)`
    font-family: 'Malgun gothic', dotum, sans-serif !important;
`

export const SignupCheck = styled.div`
    margin: 0 auto;
    width: 50%;
    height: 50px;
    border-radius: 50px;
    :hover {
        background-color: #FBFCF3;
        transition-duration: 0.28s;
    }
`

export const SignupBtn = styled.div`
    margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    height: 100%;
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

