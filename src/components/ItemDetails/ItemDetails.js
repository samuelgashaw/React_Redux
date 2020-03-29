import React, { Component } from 'react';
import { Button, Collapse, Media, Row, Col, Card } from 'react-bootstrap';

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item details
          {this.state.open === false ? ` +` : ` -`}
        </Button>

        <Collapse in={this.state.open}>
          <div>
            <Card>
              <Row>
                <Col md={6}>
                  <Media>
                    <img
                      width={100}
                      height={100}
                      alt="thumbnail"
                      src="https://i5.walmartimages.com/asr/013f4de0-db33-441b-983b-4c29aed6759f_1.1b0b38f8b97d204b442ea95bd922d0e0.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                    />
                  </Media>
                </Col>
                <Col md={6}>
                  {' '}
                  <Media.Body>
                    <p>
                      Essentials by OFM ESS-3085 Racing Style Leather Gaming
                      Chair,Red
                    </p>
                    <Row className="show-grid">
                      <Col md={6}>
                        <strong>{`$${this.props.price}`}</strong>
                        <br></br>
                        <strong className="price-strike">{`$${this.props.price}`}</strong>
                      </Col>
                      <Col md={6}>Qty: 1</Col>
                    </Row>
                  </Media.Body>
                </Col>
              </Row>
            </Card>
          </div>
        </Collapse>
      </div>
    );
  }
}
