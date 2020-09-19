import React from 'react'
import {Alert, Button, Spinner} from 'react-bootstrap'

export default function SuccessMsg() {
    return (
        <Alert variant="success">
          <Alert.Heading>Congratulations!</Alert.Heading>
          <p>Your account was created , to Login please click to Sign In</p>
        </Alert>
    )
}
