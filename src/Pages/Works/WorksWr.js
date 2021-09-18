import styled from "styled-components";

const WorksWr = styled.div`
  overflow-x: hidden !important;
  .mycard {
    width: 45%;
    h5 {
      a {
        color: #ffe500;
        text-decoration: none;
      }
    }

    img {
      width: 100%;
    }
    .visible {
      position: relative;
      width: 100%;
      overflow: hidden;
    }
    .invisible-part {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      background: #00000098;
      transition: all 0.5s ease;
      .content {
        position: relative;
        width: 100%;
        height: 100%;
        a {
          font-size: 30px;
          color: #ffe500;
        }
        .go {
          position: absolute;
          top: 0;
          right: 0;
          padding: 20px;
        }
        .codes {
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 20px;
        }
      }
    }
    .visible:hover .invisible-part {
      opacity: 1;
    }
  }
`;
export default WorksWr;
