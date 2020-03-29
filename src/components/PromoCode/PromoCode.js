import React, { Component } from 'react';
import {
  Button,
  Collapse,
  Card,
  Form,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl
} from 'react-bootstrap';
export default class PromoCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      value: ''
    };
  }

  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Apply ` : `Hide `} promo code
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Card>
              <Row className="show-grid">
                <Col md={12}>
                  <Form>
                    <FormGroup controlId="formInlineName">
                      <FormLabel>Promo Code</FormLabel>
                      <FormControl
                        text="text"
                        placeholder="Enter Promo Code"
                        value={this.props.promoCode}
                        onChange={this.handleChange}
                      />
                      <Button
                        block
                        variant="success"
                        className="btn-round"
                        disabled={this.props.isDisabled}
                        onClick={this.props.giveDiscount}
                      >
                        Apply
                      </Button>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </Card>
          </div>
        </Collapse>
      </div>
    );
  }
}
