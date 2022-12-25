import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background:${({theme})=>theme.background};
    color: ${({theme})=>theme.title};
    transition: all 0.25s linear;
    overflow-y: scroll;
}

body::-webkit-scrollbar{
    display: none;
}

.canvas{
    display: grid;
    min-height: 100vh;
    grid-auto-flow: row;
    grid-template-rows: auto 1fr auto;
    gap: 0.5rem;
    padding:1rem;
    width:100vw;
    text-align: center;
    align-items: center;
}

.type-box{
    display:block;
    max-width: 1000px;
    height: 250px;
    margin-left:auto;
    margin-right:auto;
    overflow: hidden;
    cursor: text;

}

.words{
    font-size: 32px;
    display: flex;
    flex-wrap: wrap;
    align-content:center;
    color: ${({theme})=>theme.typeBoxText}
}

.word{
    margin: 5px;
    padding-right:2px;
}

.hidden-input{
    opacity:0;
}

.correct{
    color: ${({theme})=>theme.correct};
}

.incorrect{
    color: red;
}

.current{
    border-left: 1px solid;
    animation: blinkingLeft 2s infinite;
    animation-timing-function: ease;
    @keyframes blinkingLeft{
        0% {border-left-color:#d0cece;}
        25% {border-left-color: ${({theme})=>theme.background}}
        50% {border-left-color:#d0cece;}
        75% {border-left-color: ${({theme})=>theme.background}}
        100% {border-left-color:#d0cece;}
    }
}

.right-current{
    border-right: 1px solid;
    animation: blinkingRight 2s infinite;
    animation-timing-function: ease;
    @keyframes blinkingRight{
        0% {border-right-color:#d0cece;}
        25% {border-right-color: ${({theme})=>theme.background}}
        50% {border-right-color:#d0cece;}
        75% {border-right-color: ${({theme})=>theme.background}}
        100% {border-right-color:#d0cece;}
    }
}

.skipped{
    color: grey;
}

.footer{
    display:flex;
    justify-content: space-between;
    width: 1000px;
    margin-left:auto;
    margin-right:auto;
}

.stats-box{
    display: flex;
    max-width: 1000px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
}

.left-stats{
    width: 30%;
    padding: 30px;
}

.right-stats{
    width: 70%;
}

.title{
    font-size: 20px;
    color: ${({theme})=>theme.typeBoxText};
}

.subtitle{
    font-size: 30px;
    color: ${({theme})=>theme.title};
}

a{
    text-decoration: none;
    color: inherit;
}

.upper-menu{
    display:flex;
    width:1000px;
    margin-left:auto;
    margin-right:auto;
    justify-content:space-between;
    font-size:1.35rem;
    padding:0.5rem;
    margin-top: -70px;
}

.time-modes{
    display:flex;
}
.time{
    margin-right:15px;
}
.time:hover{
    color:${({theme})=>theme.typeBoxText};
    cursor: pointer;
}

.header{
    display: flex;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    align-items: center;
}
.compare {
    display: flex;
    gap: 10;
    align-items: center;
}
.compare-btn{
    cursor: pointer;
    color: ${({theme})=>theme.background};
    background: ${({theme})=>theme.title};
    padding: 0.4rem;
    border-radius: 5px;
}

.logo img {
    width: 150px;
    height: 150px;
}

.github-button{
    background-color: rgb(66, 133, 244);
    color: rgb(255, 255, 255);
    height: 50px;
    width: 100%;
    border: none;
    text-align: center;
    box-shadow: rgb(0 0 0 / 25%) 0px 2px 4px 0px;
    font-size: 16px;
    line-height: 48px;
    display: block;
    border-radius: 1px;
    transition: background-color 0.218s ease 0s, border-color 0.218s ease 0s, box-shadow 0.218s ease 0s;
    font-family: Roboto, arial, sans-serif;
    cursor: pointer;
    user-select: none;
    margin-top: 8px;
}
.github-button:hover {
    box-shadow: rgb(66 133 244 / 30%) 0px 0px 3px 3px;
}
.github-svg {
display: flex;
width: 48px;
height: 48px;
float: left;
background-color: white;
align-items: center;
justify-content: center;
}

.user-profile{
    width: 900px;
    margin: auto;
    display: flex;
    min-height: 15rem;
    background: ${({theme})=>theme.typeBoxText};
    border-radius: 20px;
    justify-content: center;
    text-align: center;
}
.user-logo {
    cursor: pointer;
    border-radius: 50%;
    margin: 0;
    padding: 0;
}

.user{
    width: 50%;
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 1.5rem;
    padding: 1rem;
    border-right: 2px solid;
}

.info{
    width: 60%;
    padding: 1rem;
    margin-top: 1rem;
}
.picture{
    width: 20%;
}

.total-tests{
    width: 50%;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.graph, .table{
    width: 1000px;
    margin: auto;
}

.center-of-screen{
    display:flex;
    min-height:100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 3rem;
}
.login {
   color: #43FFAF;
   border: 1px solid #43FFAF;
}
.login:hover {
    border:1px solid #43FFAF;
    background-color: rgba(67, 255, 175, 0.1);
}
.compare-box {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
}
.compare-graph {
    width: 40%;
}

.logo{
    display: flex;
    gap: 10px;
}
`;