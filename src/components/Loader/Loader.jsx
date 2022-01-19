import './Loader.css';
import { useState, useEffect } from 'react';
import { CircularProgress, Box } from '@mui/material';
import { ModalUnstyled } from '@mui/base'

const style = {
    position: "absolute",
    top: "20%",
    textAlign: "center",
    zIndex: "1500",
    width: "100%"
};

const Loader = (props) => {
   
    const [openLoader, setOpenLoader] = useState(true)
    
    const switchOnLoader = (status) => {
        if(status === "success"){
            setOpenLoader(false)
            return
        }
        if(status === "loading"){
            setOpenLoader(true)
            return
        }
        if(status === "error"){
            setOpenLoader(false)
            alert("Ошибка в работе сети!")
            return
        }
    }

    useEffect(() => {
        switchOnLoader(props.status)
    }, [props.status])


    return (
      <div className="loader" >
            <ModalUnstyled open={openLoader} >
                <Box sx={style}> 
                   <CircularProgress />
                </Box>
            </ModalUnstyled>
      </div>
    );
}

export default Loader
