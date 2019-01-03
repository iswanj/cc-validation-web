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
  flex-basis: 40%;
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
  flex-grow: 1;
  flex-direction: column;
  background-color: #eee;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.53);
`;

export const Header = styled.div`
  flex: 1;
  padding: 1em;
  border-bottom: 1px solid #ccc;
`;

export const Title = styled.h1`
  flex: 1;
  font-size: 1.6em;
  text-align: center;
  color: #333;
  font-weight: 600;
`;

export const Form = styled.div`
  flex: 1;
  height: 200px;
`;
