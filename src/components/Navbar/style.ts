import styled from "@emotion/styled";

export const NavContainer = styled.div<{right: string}>`
    position: absolute;
    width: 21%;
    height: 100%;
    right: ${(props) => props.right};
    transition-duration: 0.5s;
    z-index: 2;
    background-color: rgba(25, 23, 52, 0.8);
    top: 0;
`

export const NavWrapper = styled.div`
    position: absolute;
    padding: 70px 50px 25px 20px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
`

export const NY = styled.div`
    background-image: url("/img/NY.png");
    width: 100px;
    height: 60px;
    background-size: 100%;
    background-repeat: no-repeat;
    margin-bottom: 10px;
`

export const Line = styled.div`
    width: 100%;
    border-top: 8px solid #ffffff;
    border-radius: 8px;
    margin-bottom: 15px;
`

export const LoginWrap = styled.div`
    display: flex;
    margin-bottom: 5px;
`

export const LoginText = styled.div`
    color: #C5C5C5;
    font-size: 22px;
    cursor: pointer;
`

export const LoginTxt = styled.div`
    color: #ffffff;
    font-size: 22px;
    margin-left: 10px;
`

export const AccountWrap = styled.div`
    display: flex;
    margin-bottom: 80px;
`

export const AccountText = styled.div`
    color: #ffffff;
    font-size: 15px;
    margin-right: 7px;
`

export const Signup = styled.div`
    color: #C5C5C5;
    cursor: pointer;
    font-size: 15px; 
`

export const Category = styled.div`
    display: block;
    width: 100%;
    height: auto;
`

export const Lists = styled.div`
    color: #ffffff;
    font-size: 18px;
    margin-bottom: 5px;
    cursor: pointer;
`
export const FcsLists = styled(Lists)`
    color: yellow;
`

export const NavFooter = styled.ul`
    position: absolute;
    bottom: 35px;
    display: flex;
`

export const NavLi = styled.li`
    color: #ffffff;
    font-size: 15px;
    cursor: pointer;
    margin-left: 20px;
`



