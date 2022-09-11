import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./search-box.module.css";

export default class SearchBox extends Component {
  static propTypes = {
    label: PropTypes.string,
    buttonText: PropTypes.string,
    placeholder: PropTypes.string,
    onSearch: PropTypes.func,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onSearch: undefined,
    onChange: undefined,
    label: "",
    placeholder: "",
    buttonText: "Search",
  };

  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  onChange = (event) => {
    const value = event.target.value;
    this.setState({ value, error: "" });
    return this.props.onChange(value);
  };

  onSearch = () => {
    return this.props.onSearch ? this.props.onSearch(this.state.value) : null;
  };

  render() {
    const { label, placeholder, buttonText } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.formGroup}>
          {label && (
            <label className={styles.label} htmlFor="text-input">
              {label}
            </label>
          )}
          <input
            className={styles.input}
            type="text"
            id="text-input"
            placeholder={placeholder}
            onChange={this.onChange}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                this.onSearch();
              }
            }}
          />
        </div>
        <button
          className={styles.button}
          onClick={this.onSearch}
          disabled={this.state.value.trim().length === 0}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}
