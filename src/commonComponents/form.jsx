import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";
function formToolTip(Component) {
  return class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: {}, errors: {} };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.renderButton = this.renderButton.bind(this);
      this.renderSelect = this.renderSelect.bind(this);
      this.renderInput = this.renderInput.bind(this);
    }

    // state = {
    //   data: {},
    //   errors: {},
    // };

    validate = () => {
      const options = { abortEarly: false };
      const { error } = Joi.validate(this.state.data, this.schema, options);
      // Joi.validate its oun method
      if (!error) return null;

      const errors = {};
      for (let item of error.details) errors[item.path[0]] = item.message;
      console.log(error);
      return errors;
    };

    validateProperty = ({ name, value }) => {
      const obj = { [name]: value };
      const schema = { [name]: this.schema[name] };
      const { error } = Joi.validate(obj, schema);
      return error ? error.details[0].message : null;
    };

    handleSubmit = (e) => {
      // e.preventDefault();

      const errors = this.validate();
      this.setState({ errors: errors || {} });
      if (errors) return;

      this.doSubmit();
    };

    handleChange = ({ currentTarget: input }) => {
      const errors = { ...this.state.errors };
      const errorMessage = this.validateProperty(input);
      if (errorMessage) errors[input.name] = errorMessage;
      else delete errors[input.name];

      const data = { ...this.state.data };
      data[input.name] = input.value;
      // from state = from currentTarget
      // currentTarget - Определяет элемент, в котором в данный момент обрабатывается событие, при движении события внутри DOM.

      this.setState({ data, errors });
    };

    renderButton(label) {
      return (
        <button disabled={this.validate()} className="btn btn-primary">
          {label}
        </button>
      );
    }

    renderSelect(name, label, options) {
      const { data, errors } = this.state;

      return (
        <Select
          name={name}
          value={data[name]}
          // cant write data{name}, thats why data[name]
          label={label}
          options={options}
          onChange={this.handleChange}
          error={errors[name]}
        />
      );
    }

    renderInput(name, label, type = "text") {
      const { data, errors } = this.state;

      return (
        <Input
          type={type}
          name={name}
          value={data[name]}
          label={label}
          onChange={this.handleChange}
          error={errors[name]}
        />
      );
    }
    render() {
      return (
        <div>
          <Component
            {...this.props}
            data={this.state.data}
            errors={this.state.errors}
            handleSubmit={this.handleSubmit}
            renderInput={this.renderInput}
            renderSelect={this.renderSelect}
            renderButton={this.renderButton}
          />
        </div>
      );
    }
  };
}

export default formToolTip;
