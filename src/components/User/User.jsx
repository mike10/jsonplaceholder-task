import './User.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, Modal, Card, CardContent, CardActions, Stack } from '@mui/material';
import { fetchAlbums } from '../../redux/albumsSlice'
import Loader from '../Loader/Loader'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: "90%",
    overflowY: 'auto',  
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const User = (props) => {
    let navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch()
    const albums = useSelector(state => state.albums.data)
    const [openLoader, setOpenLoader] = useState(false)
    const status = useSelector(state => state.albums.status)

    useEffect(() => {
        setOpenLoader(status)
    }, [status])

    return (
        <div className="user item" >
            <Card  sx={{width: "180px", height: "250px", borderRadius: "10px", overflow:"hidden", overflowWrap:"break-word"}} >
                <Stack sx={{height: "100%", padding: "0 10px"}}
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                    >
                    <CardContent sx={{width: "100%", overflow:"hidden"}}> 
                        <Typography align="center" sx={{margin:"0 0 20px 0", fontWeight:"bold"}}>
                            {props.name}
                        </Typography>
                        <Typography align="left" variant="subtitle2">
                            <span style={{fontWeight: "bold"}}>Company:</span>  {props.company.name}
                        </Typography>    
                        <Typography align="left" variant="subtitle2">
                            <span style={{fontWeight: "bold"}}>email:</span> {props.email}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => {navigate(`/posts/${props.id}/${props.name}`);}}>
                            Posts
                        </Button>
                        <Button onClick={() => {handleOpen(); dispatch(fetchAlbums({id: props.id}))}}>Alboms</Button>
                    </CardActions>
                </Stack>
            </Card>
            
            <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                        
                <Box sx={style}>
                    <Loader status={openLoader} /> 
                    {albums.map(item => {
                        return (
                            <div key={item.id} >
                                <Typography id="modal-modal-title" variant="body2" component="h5" sx={{ mt: 2 }}>
                                    {item.title}
                                </Typography>
                                <img src={item.thumbnailUrl} alt="img"/>
                            </div>
                        )
                    })}
                </Box>
            </Modal>
        </div>
    );
}

export default User
