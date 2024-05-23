import styled from "styled-components";

export const Container = styled.section`
  margin-bottom: 100px;
  margin-left: 20px;
  margin-top: 20px;
  @media (max-width: 900px) {
    margin-left: 0px;
    display: flex;
    flex-direction: column;
  }
  .cursor {
    width: 25px;
    height: 25px;
    margin: 0;
    padding: 0;
    border-radius: 50%;
    pointer-events: none;
    position: fixed;
    transform: translate(-50%, -50%);
  }
`;

export const Title = styled.h1`
  font-size: 45px;
  letter-spacing: 4px;
  text-align: center;
  color: rgb(234, 131, 34);
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 30%);
  justify-content: space-around;
  margin: auto;
  position: relative;
  top: 40px;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }

  li {
    @media (max-width: 900px) {
      width: 300px;
      font-size: 15px;
    }
    width: 400px;
    font-family: "Press Start 2P", cursive;
    color: rgb(255, 255, 255);
    margin-bottom: 15px;
    padding: 7px;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: #5918df;
      transform: translateX(10px);
    }
    span {
      &:hover {
        & ~ div {
          transform: rotate(-5deg) scale(1);
          opacity: 1;
        }
      }
    }
    .img-cont {
      @media (max-width: 900px) {
        display: none;
      }
      position: absolute;
      width: 430px;
      transform: translateX(100px) scale(0.8);
      opacity: 0;
      transition: 0.6s;
      img {
        border: 1px solid rgb(255, 255, 255, 0.5);
        width: 100%;
      }
    }
  }
`;
