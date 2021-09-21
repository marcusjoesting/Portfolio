import React from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import { withStyles, makeStyles } from '@material-ui/core/styles';

export default function Tip(props) {
    return (
        <CustomTooltip {...props}/>
    )
}

const CustomTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: 'black',
      color: 'white',
      maxWidth: 300,
      fontSize: theme.typography.pxToRem(16),
      border: '2px solid #dadde9',
    },
  }))(Tooltip);