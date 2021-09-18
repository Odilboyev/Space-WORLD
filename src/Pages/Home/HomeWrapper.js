import styled from "styled-components";

const HomeWr = styled.div`
  overflow-x: hidden;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  color: #ffe500;
  background: url("logo512.png"), linear-gradient(#000407, #000407);
  background-size: cover;
  background-position: bottom center;
  .welcome {
    font-family: "SpaceMission", serif !important;
    margin-top: 25%;
    line-height: 40px;
    font-size: 150px !important;
    letter-spacing: 6px;
    text-align: center;
    padding-left: 40px;
  }
  .select {
    font-size: 60px !important;
    text-align: center;
  }
  .subtitle {
    font-size: 70px;
    /* margin: 0; */
    margin-top: 0.9em;

    font-family: "Aldrich", sans-serif;
  }
  .home-btn {
    transition: all 0.5s ease-in-out !important;
    z-index: 1000;
    display: block;
    padding: 10px 60px;
    background-color: #000;
    border: 2px solid #ffe500;
    border-radius: 50px;
    color: #ffe500;
  }

  .tabs {
    overflow-x: hidden;
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    background-attachment: fixed;
    background: #00000090;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }

  .select-btn {
    margin: 20px auto;
    text-align: center;
    transition: all 0.5s ease-in-out !important;
    z-index: 1000;
    padding: 10px 60px;
    background-color: transparent;
    color: #ffe500;
    font-size: 30px;
    font-family: "SpaceMission", serif !important;
    opacity: 0.4;
    cursor: pointer;
    &.active {
      opacity: 1;
    }
  }
  .text {
    font-size: 20px;
    font-family: "Aldrich", sans-serif;
  }
`;
export default HomeWr;
