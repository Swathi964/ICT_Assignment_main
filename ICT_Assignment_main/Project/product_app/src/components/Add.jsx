import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div><br /><h2>ADD PRODUCTS</h2>

    <TextField type='text' label="Product Name" variant="outlined" /><br /><br /> 
    <TextField type='text' label="Image" variant="outlined" />  <br /><br />
    <TextField type='text' label="Price" variant="outlined" /><br /><br />
    <TextField type='text' label="Category" variant="outlined" /><br /><br />
    
    <Button variant="contained" type='submit'>ADD</Button>&nbsp;
    <Button variant="contained" type='submit'>CLEAR</Button>
    

    </div>
  )
}

export default Add