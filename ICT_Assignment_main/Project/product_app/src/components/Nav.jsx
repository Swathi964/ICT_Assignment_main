import { AppBar, Button,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h4'component="div"  align="center" sx={{flexGrow:1}} >
                   &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;PRODUCT APP
                </Typography>
                <Link to="/home">
                <Button variant="contained" color="error">HOME</Button></Link>&nbsp;&nbsp;
                <Link to="/add">
                <Button variant="contained" color="error">Add</Button></Link>&nbsp;&nbsp;

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Nav