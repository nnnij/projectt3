import React from "react";
import { Alert, Row } from "react-bootstrap";

const ErrorMsg = () => {
  return (
    <Row>
      <Alert variant="danger">لا يوجد بيانات</Alert>
    </Row>
  );
};

export default ErrorMsg;
