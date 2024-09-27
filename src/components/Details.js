import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

export default function Details (props) {
    const { title, explanation, copyright, date } = props


    return (
        <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{title} - {copyright}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{date}</CardSubtitle>
          <CardText>{explanation}</CardText>
        </CardBody>
      </Card>
        </div>
    )
}