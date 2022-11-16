import { ArrowForward, ExpandMore, FeedOutlined, FormatListBulleted, Group, Headphones, LaunchOutlined, Star } from "@mui/icons-material";
import { Link, Box, Card, CardContent, Typography as MuiTypography, useTheme, styled, Avatar, Button, Grid } from "@mui/material";
import { BuildIcon, ExtensionsIcon, EyeIcon } from "../../assets/icons/svgIcons";

import Iphone from '../../assets/images/iphone.svg';
import Appstore from '../../assets/images/appstore.svg';
import Playstore from '../../assets/images/playstore.svg';
import Globe from '../../assets/images/globe.svg';
import Thumbnail from '../../assets/images/book-with-glasses.webp';

import { useEffect, useState } from "react";
import newsApi from "../../app/news/newsApi";

const StyledCard = styled(Card)({
    borderRadius: '10px',
    backgroundColor: 'white',
    boxShadow: '0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)'
});

const Typography = styled(MuiTypography)(({ theme }) => ({
    color: theme.palette.primary.dark
}));

export const VisitorsCard = () => {
    
    const theme = useTheme();
    
    return (
        <StyledCard sx={{
            minWidth: '350px'
        }}>
            <CardContent>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Typography sx={{
                        color: theme.palette.primary.dark,
                        fontSize: '20px',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <EyeIcon color={theme.palette.primary.dark} />
                        Visitors
                    </Typography>
                    <Typography sx={{
                        fontWeight: '400',
                        fontSize: '14px',
                        color: '#666666',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        this month
                        <ExpandMore />
                    </Typography>
                </Box>
                <Box sx={{
                    height: '146px',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Typography sx={{
                        fontSize: '42px',
                        fontWeight: '500',
                        color: theme.palette.primary.dark
                    }}>
                        1824
                    </Typography>
                </Box>
                <Link href="#" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    fontWeight: '400'
                }}>
                    Do you want more visits? Contact us!
                    <ArrowForward />
                </Link>
            </CardContent>
        </StyledCard>
    );
};

export const OrdersCard = () => {

    const theme = useTheme();

    return (
        <StyledCard sx={{
            minWidth: '350px'
        }}>
            <CardContent>
                <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                    <Typography sx={{
                        color: theme.palette.primary.dark,
                        fontSize: '20px',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <FormatListBulleted />
                        Orders
                    </Typography>
                    <Typography sx={{
                        fontWeight: '400',
                        fontSize: '14px',
                        color: '#666666',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        this month
                        <ExpandMore />
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '146px'
                }}>
                    {[{title: 'Orders received:', value: '156'}, {title: 'Earnings:', value: '€ 1893,24'}].map(el => {
                        return (
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <Typography sx={{
                                    fontSize: '17px',
                                    fontWeight: '400',
                                    color: '#6C7C8C'
                                }}>
                                    {el.title}
                                </Typography>
                                <Typography sx={{
                                    fontSize: '17px',
                                    fontWeight: '500',
                                    color: 'black'
                                }}>{el.value}</Typography>
                            </Box>    
                        );
                    })}
                </Box>
                <Link href='#'>
                    10 free tips to increase your sales
                </Link>
            </CardContent>
        </StyledCard>
    );
};

export const ConfigureShopCard = () => {

    const theme = useTheme();

    return (
        <StyledCard>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between' 
                }}>
                    <Typography sx={{
                        color: theme.palette.primary.dark,
                        fontSize: '20px',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <BuildIcon color={theme.palette.primary.dark} />
                        Configure your shop
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#FFA26B'
                }}>
                    <Typography sx={{
                        fontSize: '34px',
                        fontWeight: '600',
                        lineHeight: '34px',
                        color: 'inherit'
                    }}>
                        45%
                    </Typography>
                    <Typography sx={{
                        fontSize: '15px',
                        fontWeight: '500',
                        lineHeight: '15px',
                        color: 'inherit'
                    }}>
                        completed
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={{
                        fontSize: '17px',
                        fontWeight: '400'
                    }}>
                        Complete all the steps to have a complete shop to best present to your customers. 
                    </Typography>    
                </Box>
                <Link href="#" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '25px'
                }}>
                    Complete the setup! 
                    <ArrowForward />
                </Link>
            </CardContent>
        </StyledCard>
    );
};

export const PublicityCard = () => {
    return (
        <StyledCard sx={{
            bgcolor: '#FFA26B'
        }}>
            <CardContent>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '10px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Typography sx={{
                            fontSize: '22px',
                            fontWeight: '500',
                            color: 'white'
                        }}>
                            Sell your products on your exclusive APP published on the stores 
                        </Typography>
                        <Typography sx={{
                            fontSize: '17px',
                            fontWeight: '400',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            show more
                            <ArrowForward />
                        </Typography>
                    </Box>
                    <img src={Iphone} alt="iphone x" />
                </Box>
                <Box sx={{
                    marginTop: '20px',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    gap: '25px'
                }}>
                    <Link>
                        <img src={Appstore} alt="app store" />
                    </Link>
                    <Link>
                        <img src={Playstore} alt="play store" />
                    </Link>
                </Box>
            </CardContent>
        </StyledCard>
    );
};

export const ExtensionsCard = () => {
    const theme = useTheme();

    return (
        <StyledCard>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                overflow: 'hidden'
            }}>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Typography sx={{
                        color: theme.palette.primary.dark,
                        fontSize: '20px',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <ExtensionsIcon color={theme.palette.primary.dark} />
                        Extensions Marketplace
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    overflow: 'visible',
                    width: '100%',
                    height: '200px',
                    gap: '50px'
                }}>
                    <Box sx={{
                        minWidth: '150px',
                        minHeight: '150px',
                        width: '150px',
                        height: '150px',
                        bgcolor: '#FFA26B',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                    }}>
                        <img src={Globe} alt="globe" />
                        <Typography sx={{
                            fontSize: '17px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            position: 'absolute',
                            top: '160px'
                        }}>
                            Connect your own domain
                        </Typography>
                    </Box>
                    <Box sx={{
                        minWidth: '150px',
                        minHeight: '150px',
                        width: '150px',
                        height: '150px',
                        bgcolor: '#00C48C',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white'
                        }}>
                            <Typography sx={{
                                fontSize: '34px',
                                fontWeight: '600',
                                lineHeight: '39px'
                            }}> +50 </Typography>
                            <Typography sx={{
                                fontSize: '20px',
                                fontWeight: '500',
                                lineHeight: '25px'
                            }}> Products </Typography>
                        </Box>
                        <Typography sx={{
                            fontSize: '17px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            position: 'absolute',
                            top: '160px'
                        }}>
                            50 Additional products
                        </Typography>
                    </Box>
                </Box>
                <Link href="#" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '25px'
                }}>
                    Discover all extensions 
                    <ArrowForward />
                </Link>
            </CardContent>
        </StyledCard>
    );
}

export const TrustPilotCard = () => {

    return (
        <StyledCard sx={{
            bgcolor: '#000032'
        }}>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between' 
                }}>
                    <Typography sx={{
                        fontSize: '20px',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'end',
                        gap: '2px',
                        color: 'white'
                    }}>
                        <Star sx={{ color: '#00B67A', width: '35px', height: '35px' }} />
                        Trustpilot
                    </Typography>
                </Box>
                <Typography sx={{ fontSize: '17px', lineHeight: '22px', fontWeight: '400', color: 'white' }}>
                Show us your love by leaving a <Typography sx={{ color: '#00C48C', display: 'inline' }}>positive</Typography> review on trust pilot and receive the extension of
                <Typography sx={{ fontWeight: '700', display: 'inline', color: 'inherit' }}> 50 additional products</Typography>
                </Typography>
                <Link href="#" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '25px',
                    color: '#00C48C'
                }}>
                    Write a review on Trustpilot 
                    <ArrowForward />
                </Link>
            </CardContent>
        </StyledCard>
    );
};

export const InviteFriendCard = () => {

    return (
        <StyledCard>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between' 
                }}>
                    <Typography sx={{
                        fontSize: '20px',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <Group />
                        Invite friend
                    </Typography>
                </Box>
                <Typography sx={{ fontSize: '17px', lineHeight: '22px', fontWeight: '400' }}>
                <Typography sx={{ display: 'inline', fontWeight: '700', color: '#00C48C' }}>Receive 50 products</Typography> by inviting a friend who subscribes to a plan. Your friend will receive a 30% discount coupon valid for any plan.
                </Typography>
                <Link href="#" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '25px'
                }}>
                    Start inviting friends!
                    <ArrowForward />
                </Link>
            </CardContent>
        </StyledCard>
    );
};

export const CustomerSupportCard = () => {

    return (
        <StyledCard>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Typography sx={{
                        fontSize: '20px',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <Headphones />
                        Customer Support
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    gap: '22px',
                    alignItems: 'center'
                }}>
                    <Avatar alt="avatar" src="" />
                    <Typography sx={{ fontSize: '15px', fontWeight: '400', lineHeight: '24px' }}>Simone is here to help you.</Typography>
                </Box>
                <Button variant="contained" size="large" sx={{
                    color: 'white',
                    width: '170px',
                    fontSize: '15px',
                    fontWeight: '600',
                    textTransform: 'capitalize'
                }}>
                    Contact Us
                </Button>
            </CardContent>
        </StyledCard>
    );
};

export interface ArticleItem {
    imageLink: string;
    category: string;
    title: string;
    estimatedReadingTime: number;
};

export interface ArticleItemProps {
    article: ArticleItem;
};

const ArticleItemCard = ({ article }: ArticleItemProps) => {
    return (
        <Box sx={{
            display: 'flex',
            gap: '5px',
            alignItems: 'stretch'

        }}>
            <img src={article.imageLink ?? Thumbnail} alt="thumbnail" style={{width: '100px', height: '100px'}} />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                gap: '5px'
            }}>
                <Typography sx={{
                    fontSize: '11px',
                    fontWeight: '500',
                    lineHeight: '13px',
                    textTransform: 'uppercase',
                    color: 'primary.main'
                }}>{article.category}</Typography>
                <Typography paragraph sx={{
                    fontSize: '15px',
                    fontWeight: '500',
                    lineHeight: '20px',
                    maxHeight: '40px',
                    overflow: 'hidden'
                }}>{article.title}</Typography>
                <Typography sx={{
                    fontSize: '12px',
                    fontWeight: '300',
                    lineHeight: '12px'
                }}>{`Estimated reading ${article.estimatedReadingTime} min`}</Typography>
            </Box>
        </Box>
    );
};

export const LatestNewsCard = () => {

    const [news, setNews] = useState<ArticleItem[] | null>(null);
    useEffect(() => {
        newsApi().then((res: ArticleItem[] | null) => setNews(res));
    }, []);

    return (
        <StyledCard>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }}>
               <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Typography sx={{
                        fontSize: '22px',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <FeedOutlined />
                        Latest News
                    </Typography>
                    <Link href="#" sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        Visit our blog
                        <LaunchOutlined />
                    </Link>
                </Box>
                <Grid container columns={2} spacing={2}>
                    {news && news.map(ar => (
                        <Grid item md={1}>
                            <ArticleItemCard article={ar} />
                        </Grid>
                    ))}
                    {!news &&
                    <Grid item md={2}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '34px',
                            fontWeight: '900',
                            color: 'rgba(10, 10, 10, 0.3)'
                        }}>No Articles Available!</Box>
                    </Grid> 
                    }
                </Grid>
            </CardContent>
        </StyledCard>
    );
};
