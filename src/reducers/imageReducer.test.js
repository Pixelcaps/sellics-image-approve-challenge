import imageReducer, { addApprovedImage, addUnapprovedImageId } from './imageReducer'

describe('image reducer', () => {
    const initialState = {
        approvedImages: [],
        unapprovedImageIds: []
    };
    it('should handle initial state', () => {
      expect(imageReducer(undefined, {})).toEqual({
        approvedImages: [],
        unapprovedImageIds: []
      });
    });

    it('should handle adding an approved image to an empty approved array', () => {
        expect(imageReducer(initialState, addApprovedImage(
            { 
                id: 'test',
                name: 'flavius' 
            }
            ))).toEqual(
            {
                approvedImages: [{ id: 'test', name: 'flavius'}],
                unapprovedImageIds: []
            }
        );
    });
  
    it('should handle adding an approved image to a populated approved array', () => {
        const previousState = {
            approvedImages: [{ id: 'initial', name: 'bob' }],
            unapprovedImageIds: []
        }
        expect(imageReducer(previousState, addApprovedImage(
            { 
                id: 'test',
                name: 'alice' 
            }
            ))).toEqual(
            {
                approvedImages: [{ id: 'initial', name: 'bob' }, { id: 'test', name: 'alice'}],
                unapprovedImageIds: []
            }
        );
    });

    it('should handle adding an approved image to an empty unapproved ids array', () => {
        expect(imageReducer(initialState, addUnapprovedImageId('abc123'))).toEqual(
            {
                approvedImages: [],
                unapprovedImageIds: ['abc123']
            }
        );
    });
  
    it('should handle adding an approved image to a populated unapproved ids array', () => {
        const previousState = {
            approvedImages: [],
            unapprovedImageIds: ['def456', 'xyz789']
        }
        expect(imageReducer(previousState, addUnapprovedImageId('qwerty7'))).toEqual(
            {
                approvedImages: [],
                unapprovedImageIds: ['def456', 'xyz789', 'qwerty7']
            }
        );
    });
  });