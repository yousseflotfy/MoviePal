import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import '../App.css';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       
       
    },
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        backgroundColor: 'grey'
    },
}));
export default function SimpleModal  (props)  {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
        <a variant="contained" color="primary" onClick={handleOpen}>
            {props.moviesDetails.title}
        </a>

        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
        >
            <div style={modalStyle} className={classes.paper}>
                <h2>{props.moviesDetails.title}</h2>
               
                <div className="movieDetails">
                      <img height="150px" src={"http://image.tmdb.org/t/p/w185/"+props.moviesDetails.poster}/>
                      <div marginLeft = "10px">
                      <p><b>Rating:</b> {props.moviesDetails.rating} </p>
                      <p><b>Release Date:</b> {props.moviesDetails.releaseDate}</p>
                      </div>
                      
                    
                 </div>
                <h4>Overview</h4>
                <p>  {props.moviesDetails.overview}</p>
               
                
            </div>
        </Modal>
    </div>
    );
}

