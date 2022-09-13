import React from "react";
import { Button, Card, CardBody, FormGroup, Form, Input, Row, Col, } from "reactstrap";
import { post } from "../../request/request";


class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "admin@gmail.com",
      password: "hash"
    }
  }

  signup() {
    const { email, password } = this.state;
    if (email != "" && password != "") {
      const obj = { email, password }
      post(obj, "adminauth/signin")
      .then((res) => {
          let data = res.data.user;
          localStorage.setItem("currentUser", JSON.stringify(data));
          this.props.history.push("/");
          delete data.password;
        }).catch((err) => {
          console.log(err)
        })
    }
  }

  onchange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { email, password } = this.state
    return (
      <>
        <Col lg="5" md="7">
          {/* <Alert color="danger"  >  This is a primary alert — check it out! </Alert> */}
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <Input name={"email"} id="input-address" value={email} onChange={this.onchange.bind(this)} placeholder="Email" type="email" autoComplete="new-email" />
                </FormGroup>
                <FormGroup>
                  <Input name={"password"} value={password} onChange={this.onchange.bind(this)} placeholder="Password" type="password" autoComplete="new-password" />
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label className="custom-control-label" htmlFor=" customCheckLogin">
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button onClick={this.signup.bind(this)} className="my-4" color="primary" type="button">
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()} >
                <small>Forgot password?</small>
              </a>
            </Col>

          </Row>
        </Col>
      </>
    );
  }
}

export default Login;
