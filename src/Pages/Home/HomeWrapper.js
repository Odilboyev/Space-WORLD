import styled from "styled-components";

const HomeWr = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
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
    margin: 10px;
    margin-top: 20%;
    line-height: 40px;
    font-size: 150px !important;
    letter-spacing: 5px;
    text-align: center;
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
    padding: 10px 60px;
    background-color: #000;
    border: 2px solid #ffe500;
    border-radius: 50px;
    color: #ffe500;
  }

  .tabs {
    width: 100vw;
    min-height: 100vh;
    background: #00000090;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }

  .select-btn {
    transition: all 0.5s ease-in-out !important;
    z-index: 1000;
    padding: 10px 60px;
    background-color: transparent;
    color: #ffe500;
    font-size: 40px;
    font-family: "SpaceMission", serif !important;
  }
`;
export default HomeWr;
