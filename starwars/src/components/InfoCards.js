import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Col, CardImg } from 'reactstrap';
import styled from "styled-components";

const Titles = styled(CardTitle)`
color: brown;
font-size: 2rem;
`;

const Cards = styled(Card)`
background-color: darkgrey !important;
`;

const InfoCards = props =>{
    return(
        <Col xs="12" s="6" md="4" key={props.id}>
            <Cards className="m-2" outline color="warning">
                <CardBody>
        <Titles>{props.name}</Titles>
        <CardText>Gender: {props.gender}</CardText>
        <CardText>Height: {props.height}</CardText>
        <CardText>Birth-Year: {props.birth_year}</CardText>
        <CardText>Created: {props.created}</CardText>
      </CardBody>
      </Cards>
  </Col>

            
       
    );
};
export default InfoCards;

