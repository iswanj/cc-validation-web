import * as React from 'react';

import { ErrorMsg, Input, InputGroup, Label, Wrapper, InputContainer, ImgContainer } from './styles';

interface IinputProps {
  placeholder?: string;
  name: string;
  inline?: boolean;
  label: string;
  error?: string;
  value: any;
  noLabel?: boolean;
  small?: boolean;
  onChange: (name: string, value: string) => void;
  renderIcon?: (value: string) => any;
}

export default class InputField extends React.Component<IinputProps> {
  public static defaultProps = {
    inline: false
  };

  private handleOnChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    const value: string = target.value;
    const { onChange, name } = this.props;
    onChange(name, value);
  };

  public render() {
    const {
      inline,
      noLabel,
      label,
      error,
      value,
      placeholder,
      renderIcon,
      small
    } = this.props;
    return (
      <Wrapper inline={inline} small={small}>
        {!noLabel && <Label inline={inline}>{label}</Label>}
        <InputGroup inline={inline}>
          <InputContainer error={error}>
            <Input
              placeholder={placeholder}
              value={value || ''}
              onChange={this.handleOnChange}
              error={error}
            />
            <ImgContainer>
              {renderIcon && renderIcon(value)}
            </ImgContainer>
          </InputContainer>
          {error && <ErrorMsg>{error}</ErrorMsg>}
        </InputGroup>
      </Wrapper>
    );
  }
}
