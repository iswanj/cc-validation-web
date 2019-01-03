import styled from '../../styles/styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-grow: 1;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

export const Col = styled("div")<{ span: number }>`
  min-height: 550px;
  -ms-flex: auto;
  flex-basis: 30%;
  margin: 0 auto;
  width: 259px;
  position: relative;
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    flex-basis: ${props => (props.span ? (props.span / 12) * 100 : '8.33')}%;
  }
`;

export const Box = styled.div`
  display: flex;
  margin-top: 2em;
  padding: 1em;
  flex-grow: 1;
  flex-direction: column;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.2);
`;

export const Header = styled.div`
  flex: 1;
  padding: 1em;
  border-bottom: 1px solid #ccc;
`;

export const Title = styled.h1`
  flex: 1;
  font-size: 1.5em;
  text-align: center;
  color: #333;
  font-weight: 400;
`;

export const Form = styled.div`
  flex: 1;
  min-height: 200px;
  padding-top: 1em;
  flex-direction: row;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  padding: 0 1em;
`;
