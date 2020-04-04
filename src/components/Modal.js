import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "./Context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import { CloseModal } from "./Context";
export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, CloseModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container ">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5>item added to the cart</h5>
                      <img src={img} className="img-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price:${price}</h5>
                      <Link to="/">
                        <ButtonContainer onClick={() => value.closeModal()}>
                          store
                        </ButtonContainer>
                      </Link>

                      <Link to="/cart">
                        <ButtonContainer onClick={() => value.closeModal()}>
                          go to cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
const ModalContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: 0;
  padding: 0;
  border: 3px solid black;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
  opacity: 0.9;
`;
