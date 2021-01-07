import React from 'react';
import Button from '@material-ui/core/Button';

export default function ButtonDefault(props) {
    return (
        <Button 
        variant="contained" 
        color="primary">
            {props.text}
        </Button>
    )
}
