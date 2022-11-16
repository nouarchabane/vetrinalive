import { Box, Link, Typography, useTheme } from "@mui/material";
import { ExternalLinkIcon } from "../../assets/icons/svgIcons";

const SubHeader = () => {
    const theme = useTheme();
    return (
        <Box sx={{
            position: 'relative',
            background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, rgba(33, 184, 249, 0) 132.05%)`,
            height: '182px',
            width: '100%',
            color: 'white'
        }}>
            <Typography sx={{
                fontSize: '34px',
                fontWeight: '600',
                position: 'absolute',
                top: '40px',
                left: '37px'
            }}>Welcome Mario!</Typography>
            <Link href="#" sx={{
                position: 'absolute',
                top: '48px',
                right: '38px',
                color: 'white',
                display: 'flex',
                gap: '10px',
                alignItems: 'center'
            }}>
                app.vetrinalive.it/fenoh-store
                <ExternalLinkIcon color="white" />
            </Link>
        </Box>
    );
};

export default SubHeader;