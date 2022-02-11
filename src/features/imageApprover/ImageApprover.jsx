import React, { useState } from 'react';
import { getRandomUnsplashPhoto } from '../../endpoints';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { addApprovedImage, addUnapprovedImageId, selectUnapprovedImageIds } from '../../reducers/imageReducer';
import { useSelector, useDispatch } from 'react-redux';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { ImageApproverContainer, ImageRecommendation, InitialNoImageContainer, RecommendedImageContainer } from './ImageApproverStyles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const ImageApprover = () => {
    const [currentImage, setCurrentImage] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const unapprovedImageIds = useSelector(selectUnapprovedImageIds);
    const [alert, setAlert] = useState(false);

    const approveImage = () => {
        dispatch(addApprovedImage(currentImage));
        setCurrentImage({});
    };

    const unapproveImage = () => {
        dispatch(addUnapprovedImageId(currentImage.id));
        fetchNewRandomImage()
    };

    /* Used an array of unapproved image ids to filter the responses so I always get new images */

    const fetchNewRandomImage = async () => {
        setIsLoading(true)
        setCurrentImage({});
        const newImage = await getRandomUnsplashPhoto();
        if (newImage) {
            if (unapprovedImageIds.includes(newImage.id)) {
                fetchNewRandomImage()
            } else {
                setCurrentImage(newImage);
                setIsLoading(false);
            }
        } else {
            setIsLoading(false);
            setAlert(true);
        }
    };

    return (
        <>
        <ImageApproverContainer>
            <ImageRecommendation>
                <RecommendedImageContainer>
                    {Object.keys(currentImage).length !== 0 ? 
                        <img style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '10px' }} alt='currentImage' className="img" src={currentImage.urls.small} />
                        :
                        <InitialNoImageContainer>
                            {isLoading ? 
                                <CircularProgress />
                                :
                                <IconButton aria-label="add random picture" onClick={fetchNewRandomImage}>
                                    <AddCircleIcon style={{ fontSize: '5rem'}} />
                                </IconButton>
                            }
                        </InitialNoImageContainer>
                    }
                </RecommendedImageContainer>
                <Divider />
                {Object.keys(currentImage).length !== 0 ?
                    <>
                        <IconButton color="error" aria-label="don't approve image" onClick={unapproveImage}>
                            <CancelIcon style={{ fontSize: '5rem'}} />
                        </IconButton>
                        <IconButton color="success" aria-label="approve image" onClick={approveImage}>
                            <CheckCircleIcon style={{ fontSize: '5rem'}} />
                        </IconButton>
                    </>
                    :
                    <Typography variant="overline">Click on the plus icon in order to get image recommendations</Typography>
                }
            </ImageRecommendation>
        </ImageApproverContainer>
        <Dialog
            open={alert}
            TransitionComponent={Transition}
            onClose={() => setAlert(false)}
            aria-describedby="alert-dialog-slide-description"
            keepMounted
        >
            <DialogTitle>Error</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Whoa there champ, you overloaded the server, relax and come back later!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={() => setAlert(false)}>Ok</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

export default ImageApprover;