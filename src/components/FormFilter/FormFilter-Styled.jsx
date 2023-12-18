import styled from "styled-components";

const FormGroup = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  max-width: 65%;
  width: 100%;
  margin: 5vh auto;
  padding: 24px;
  box-shadow: 0px 0px 10px 1px #b3afaf;
  border-radius: 18px;

  .form-icon {
    font-size: 26px;
    color: #808080;
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;

    img {
      height: 50px;
    }
  }

  h2 {
    color: #808080;
    font-weight: 300;
    margin-top: 32px;
    margin-bottom: 8px;
  }

  .radio-wrapper {
    font-size: 22px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 8px 4px;
    border-top: 1px solid #d1d0d0;
    position: relative;
    color: #808080;

    &:nth-last-child(3) {
      border-bottom: 1px solid #d1d0d0;
    }

    span {
      position: absolute;
      right: 0px;
    }

    label {
        font-size: 22px;
        margin-left: 1%;
    }
    
  }

  .btn-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-content: center;
    width: 100%;

    .btn {
      font-size: 18px;
      border-radius: 4px;
      color:  #333333;
      font-weight: 700;
      text-transform: uppercase;
      padding: 14px;
      width: 100%;
      border: none;
      cursor: pointer;
    }

    .btn-primary {
      background-color:  #FFB612;
    }

    .btn-secondary {
      background-color: transparent;
      border: 1px solid #9e9e9e;
    }

  }

  .checkbox-wrapper {
    color: #808080;
    margin: 32px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 12px;


    input[type="checkbox"] {
        margin-right: 8px;
    }
    
  }

  @media (min-width: 768px) {
    .btn-wrapper {
      flex-direction: row;

      .btn {
        width: 25%;
      }
    }

    .checkbox-wrapper {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export default FormGroup;