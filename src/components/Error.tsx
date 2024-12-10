// import React from "react";
interface ErrorMessageProps {
  message: string;
}

const Error: React.FC<ErrorMessageProps> = ({ message }) => (
  <div>{message}</div>
);

export default Error;
