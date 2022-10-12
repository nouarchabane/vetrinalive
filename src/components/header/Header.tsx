import { AppBar, Box, styled, Typography, useTheme } from "@mui/material";
import { ZapIcon } from "../../assets/icons/svgIcons";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    height: '60px',
}));

const Header = () => {
    const theme = useTheme();

    return (
        <StyledAppBar data-testid="appbar-testid" position="static" elevation={0} sx={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: '37px',
            paddingRight: '37px'
        }}>
            <Typography data-testid="title-testid" variant="h6" component="span" sx={{ 
                flexGrow: 0,
                color: 'primary.dark',
                fontWeight: '500',
                backgroundColor: 'primary',
                fontSize: '17px'
            }}>
                Dashboard
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                color: theme.palette.primary.dark,
                position: 'relative',
                cursor: 'pointer'
            }}>
                <ZapIcon color={theme.palette.primary.dark} />
                <Typography data-testid="link-testid" component="div" sx={{
                    fontWeight: '400',
                    fontSize: '15px'
                }}>What's new</Typography>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    top: -10,
                    right: -10,
                    borderRadius: '10px',
                    width: '20px',
                    height: '20px',
                    bgcolor: 'red',
                    color: 'white'

                }}>
                    5
                </Box>
            </Box>
        </StyledAppBar>
    );
};

export default Header;