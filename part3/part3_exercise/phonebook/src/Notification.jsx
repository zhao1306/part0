const Notification = ({ success, message }) => {
  const errorStyle = {
    color: "red",
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  };
  const successStyle = {
    color: "green",
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  };

  console.log(message);
  if (message === null || message === "") {
    return null;
  }

  console.log(success);
  if (success === true) {
    return (
      <div className="success" style={successStyle}>
        {message}
      </div>
    );
  }

  return (
    <div className="error" style={errorStyle}>
      {message}
    </div>
  );
};

export default Notification;
