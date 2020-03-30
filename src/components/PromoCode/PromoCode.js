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
import { connect } from 'react-redux';
import { handleChange } from '../../actions/promoCodeActions';

class PromoCodeDiscount extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
      // value: ''
    };
  }

  handleChange = e => {
    this.props.handleChange(e);
  };

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
                    </FormGroup>
                    <Button
                      block
                      variant="success"
                      className="btn-round"
                      disabled={this.props.isDisabled}
                      onClick={this.props.giveDiscount}
                    >
                      Apply
                    </Button>
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

const mapStatesToProps = state => ({
  promoCode: state.promoCode.value
});
export default connect(mapStatesToProps, { handleChange })(PromoCodeDiscount);
