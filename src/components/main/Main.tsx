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
            <Box sx={{
                flexGrow: 1,
                zIndex: 2,
                marginTop: '-50px',
                padding: '0px 40px'
            }}>
                <Grid container columns={3} spacing={2}>
                    <Grid item md={2}>
                        <Grid container columns={2} spacing={2}>
                            <Grid item md={1}>
                                <VisitorsCard />
                            </Grid>
                            <Grid item md={1}>
                                <OrdersCard />
                            </Grid>
                            <Grid item md={1}>
                                <PublicityCard />
                            </Grid>
                            <Grid item md={1}>
                                <ExtensionsCard />
                            </Grid>
                            <Grid item md={2}>
                                <LatestNewsCard />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={1}>
                        <Grid container columns={1} spacing={2}>
                            <Grid item md={1}>
                                <ConfigureShopCard />
                            </Grid>
                            <Grid item md={1}>
                                <TrustPilotCard />
                            </Grid>
                            <Grid item md={1}>
                                <InviteFriendCard />
                            </Grid>
                            <Grid item md={1}>
                                <CustomerSupportCard />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Main;