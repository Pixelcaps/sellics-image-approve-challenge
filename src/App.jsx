import React from 'react';
import './App.css';
import ImageCarousel from './features/imageCarousel/ImageCarousel'
import ImageApprover from './features/imageApprover/ImageApprover';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { selectApprovedImages } from './reducers/imageReducer';
import { StyledAppBar, StyledDivider, NoOfImages } from './styles';

function App() {
    const images = useSelector(selectApprovedImages);

    return (
        <div className="App">
            <StyledAppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div">Image Approval Application</Typography>
                </Toolbar>
            </StyledAppBar>
            <NoOfImages variant="overline" component="div">Approved Images ({images.length})</NoOfImages>
            <ImageCarousel></ImageCarousel>
            <StyledDivider />
            <ImageApprover />
        </div>
    );
}

export default App;
