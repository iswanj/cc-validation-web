import styled from '../../styles/styled-components';

interface IDiv {
  inline?: boolean;
  small?: boolean;
}
interface IInput {
  error?: string;
}

export const Wrapper = styled('div')<IDiv>`
  display: flex;
  flex-grow: 1;
  flex-direction: ${p => (p.inline ? 'row' : 'column')};
  align-items: flex-start;
  padding: 0 0.5em 0.8em 0.5em;
  @media only screen and (max-width: 768px) {
    flex-basis: 100%;
    width: calc(100% - 1em);
  }
`;

export const Label = styled('label')<IDiv>`
  display: flex;
  flex-grow: 3;
  flex-basis: ${p => (p.inline ? 0 : 1)};
  margin-bottom: 5px;
  font-size: 14px;
  color: #444;
  padding-top: 5px;
`;

export const InputGroup = styled('div')<IDiv>`
  display: flex;
  flex-grow: 5;
  flex-basis: ${p => (p.inline ? 0 : 1)};
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  width: ${p => (p.inline ? 'unset' : '100%')};
  margin: 1px 0;
`;

export const InputContainer = styled('div')<IInput>`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  border: 1px solid;
  border-radius: 3.01px;
  border-color: ${p => (p.error && p.error !== '' ? '#ef5350' : '#ccc')};
  box-sizing: border-box;
  font-size: 1em;
  margin: 0;
  vertical-align: baseline;
  width: 100%;
`;

export const Input = styled('input')<IInput>`
  flex: 1;
  padding: 12px 8px;
  border: none;
  border-radius: 3.01px;
  outline: none;
`;

export const ErrorMsg = styled.p`
  clear: both;
  color: #ef5350;
  display: block;
  font-size: 1.1em;
  margin: 5px 0 0;
  font-size: 13px;
`;

export const ImgContainer = styled.div`
  padding-right: 4px;
`;
