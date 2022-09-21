import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';

const AlertBox = ({open, handleClose,action}) => {
  return (
    <Snackbar
    style={{backgroundColor:"#54a0ff"}}
    open={open}
    autoHideDuration={6000}
    onClose={handleClose}
    message="Enter correctly"
    action={action}
  />
  )
}

export default AlertBox
