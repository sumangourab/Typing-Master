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
    height: 240px;
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
    color: ${({theme})=>theme.incorrect};

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
    flex-direction: column;
    align-self: end;
    width: 1000px;
    margin-left:auto;
    margin-right:auto;
}
.actual-footer{
    display: flex;
    justify-content: space-between;
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

.time-modes, .word-modes{
    display:flex;
}
.time, .no-of-word{
    margin-right:15px;
}
.time:hover, .no-of-word:hover{
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
    align-self: stretch;
}
.compare {
    display: flex;
    gap: 10;
    align-items: center;
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
.instruction{
    color: ${({theme})=>theme.title};
}
.hint{
    kbd{
        background: ${({theme})=>theme.title};
        color: ${({theme})=>theme.background};
        padding: 2.5px 5px;
        border-radius: 4px; 
    }
}
.modees {
    display:flex;
    gap:10px;
}
.mode {
    border: 1px solid ${({theme})=>theme.title};
    border-radius: 5px;
    padding: 5px 8px;
    cursor: pointer;
}
.mode:hover {
    background-color: rgba(67, 255, 175, 0.1);
}
.css-9tj150-MuiButton-endIcon {
    margin-left: 0;
}
.top {
    margin-top: 20px;
}
.restart {
    border: 1px solid ${({theme})=>theme.title};
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
    color: ${({theme})=>theme.title};
}
.restart:hover {
    background-color:rgba(67, 255, 175, 0.1) ;
    border-color:${({theme})=>theme.title} ;
}

@media only screen and (max-width: 768px) {
    .canvas {
      grid-template-rows: auto 1fr;
      gap: 0.25rem;
    }
    .type-box {
      height: 160px;
    }
  }
  
  @media only screen and (max-width: 480px) {
    .canvas {
      padding: 0.5rem;
    }
    .type-box {
      min-height: 380px;
      width: 350px;
      margin: 0;
    }
    .header {
        width: 350px;
        margin: 0;
        display: flex;
        justify-content: space-between;
    }
    .upper-menu {
        width:350px;
        margin: 0;
    }
    .words {
      font-size: 25px;
      display:flex;
      align-items: center;
      justify-content: center;

    }
    .footer{
    display:flex;
    flex-direction: column;
    align-self: end;
    width: 320px;
    margin: 0;
}
.hint {
    display: none;
}

.compare button {
    font-size: 10px;
}
.upper-menu,.modees,.time-modes {
    font-size: 18px;
}
  }
  

`;