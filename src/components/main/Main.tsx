import { Box, Grid } from "@mui/material";
import { ConfigureShopCard, OrdersCard, PublicityCard, VisitorsCard, ExtensionsCard, TrustPilotCard, InviteFriendCard, CustomerSupportCard, LatestNewsCard } from "../cards/Cards";
import SubHeader from "../SubHeader/SubHeader";

const Main = () => {

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start'
        }}>
            <SubHeader />
        </Box>
    );
}

export default Main;