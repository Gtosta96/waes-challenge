import React, { Component } from 'react';

interface IProps {
  className?: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange: (e: any) => void;
}

interface IState {
  value: string | undefined;
}

class Input extends Component<IProps, IState> {
  public static defaultProps = {
    type: "text",
    placeholder: "Digite aqui...",
    defaultValue: ""
  };

  public state = {
    value: this.props.defaultValue
  };

  public onChange = (e: any) => {
    this.setState({ value: e.target.value });

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  public render() {
    return (
      <input
        className={this.props.className}
        type={this.props.type}
        placeholder={this.props.placeholder}
        onChange={this.onChange}
        defaultValue={this.state.value}
      />
    );
  }
}

export default Input;
