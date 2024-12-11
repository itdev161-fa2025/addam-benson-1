import React, {useState} from 'react'
import {Form, Button,} from 'react-bootstrap'

export const UserInput = (props) => {
    
    const [userInput, setUserInput] = useState(
        {
            value : ""

        }
    )

    const onChange = (e) => {
        const { name, value } = e.target;
        setUserInput({
          ...userInput,
          [name]: value,
        });
      };

    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
      } = props

  return (
    <>
    <Form>
       <Form.Group></Form.Group>
          <Form.Label htmlFor="choreDescription"></Form.Label>
            <Form.Control
              className="form-control"
              name="choreDescription"
              type="text"
              value={userInput.value}
              placeholder="Enter chore description"
              onChange={(e) => onChange(e)}
              onBlur={handleBlur}
            />
          <Button className="" type="submit" >Submit</Button>
          <Button
            className=""
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
          >Reset
          </Button>
      </Form>
      {/* {status && (<div className={status.type}>{status.message}</div>)} */}
      </>
  )
}
