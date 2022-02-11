import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    approvedImages: [],
    unapprovedImageIds: []
};

export const imageSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        addApprovedImage: (state, action) => {
            state.approvedImages.push(action.payload);
        },
        addUnapprovedImageId: (state, action) => {
            state.unapprovedImageIds.push(action.payload);
        }
    },
});

export const selectApprovedImages = (state) => state.images.approvedImages;
export const selectUnapprovedImageIds = (state) => state.images.unapprovedImageIds;

export const { addApprovedImage, addUnapprovedImageId } = imageSlice.actions;

export default imageSlice.reducer;
