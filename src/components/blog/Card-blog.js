import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ActionAlert from './Alert';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



 export default function Cardblog() {
    const notify = () => toast.info("Comming Soon!", {
        // Set to 15sec
        position: toast.POSITION.BOTTOM_CENTER, autoClose:5000});   
    
    
    return (
        <div>
            <ToastContainer />
        
    
            <Card sx={{ maxWidth: 445 }} onClick={notify}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://media.istockphoto.com/photos/coming-soon-banner-in-dark-blue-with-orange-text-letters-in-3d-picture-id1340913476?b=1&k=20&m=1340913476&s=170667a&w=0&h=yNJZBCgMcCzHxOG8xvswG__A-I6OocT-Y1unYkbWuz8="
                        alt="green iguana"
                    />
                    <CardContent className="white">
                        <Typography gutterBottom variant="h5" component="div">
                            COMMING SOON
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Here you can follow the latest news and developments affecting the crypto market
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </div>
  );
}
