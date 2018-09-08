import React from "react";

class Alert extends React.Component {
  componentDidMount() {
    this.timer = setTimeout(this.props.onClose, this.props.timeout);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  alertClass(type) {
    const classes = {
      error: "alert-danger",
      alert: "alert-warning",
      notice: "alert-info",
      success: "alert-success"
    };
    return classes[type] || classes.success;
  }

  render() {
    const message = this.props.message;
    const alertClassName = `alert ${this.alertClass(message.type)} fade in`;

    return (
      <div className={alertClassName}>
        <button className="close" onClick={this.props.onClose}>
          &times;
        </button>
        {message.text}
      </div>
    );
  }
}

Alert.defaultProps = {
  timeout: 3000
};

export default Alert;
