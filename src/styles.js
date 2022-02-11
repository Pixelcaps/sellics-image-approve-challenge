import { styled as styledMaterial } from "@mui/material/styles";
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export const StyledAppBar = styledMaterial(AppBar)`
    background-color: #111111;
    color: #eb8c34;
    align-items: center
`;

export const StyledDivider = styledMaterial(Divider)`
    margin: 25px;
`;

export const NoOfImages = styledMaterial(Typography)`
    text-align: left;
    margin-left: 25px;
`;

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1366px',
    laptopL: '1440px',
    desktop: '1920px',
    desktopL: '2560px'
}

export const device = {
    mobile: `(min-width: ${size.mobileS}) and (max-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
    laptop: `(min-width: ${size.laptop}) and (max-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.laptopL})`,
};