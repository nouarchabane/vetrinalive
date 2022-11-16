import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Collapse, Divider, FormControl, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Select, Typography, useTheme } from "@mui/material";
import { useCallback, useState } from "react";
import { icons, MenuIcon } from "../../assets/icons/svgIcons";

import Logo from '../../assets/images/logo.svg'

interface NavLink {
    icon?: string;
    title: string;
}

interface NavCollapsable {
    icon?: string
    title: string;
    isOpen: boolean;
    subLinks: NavLink[];
}

type ListDivider = 'divider'

type NavListObject = NavLink | NavCollapsable | ListDivider;

const links: NavListObject[] = [
    {
        icon: 'home',
        title: 'Dashboard'
    },
    {
        icon: 'carte',
        title: 'Catalogue'
    },
    {
        icon: 'list',
        title: 'Orders'
    },
    {
        icon: 'user',
        title: 'Customers'
    },
    {
        icon: 'target',
        title: 'Marketing',
        isOpen: false,
        subLinks: [
            {
                title: 'Discount codes',
            },
            {
                title: 'Exit intent'
            },
            {
                title: 'Checkout Features'
            },
            {
                title: 'Post purchase conversion'
            },
            {
                title: 'Cart abandonment'
            },
            {
                title: 'TImer checkout'
            },
            {
                title: 'Sell on Social'
            },
            {
                title: 'Special Offer'
            },
            {
                title: 'Seasonal Offer'
            }
        ]
    },
    {
        icon: 'truck',
        title: 'Delivery Options'
    },
    {
        icon: 'dollar-sign',
        title: 'Payment Options'
    },
    {
        icon: 'brush',
        title: 'Store Design'
    },
    {
        icon: 'card',
        title: 'Subscription'
    },
    {
        icon: 'integrations',
        title: 'Integrations'
    },
    {
        icon: 'extensions',
        title: 'Extensions'
    },
    {
        icon: 'settings',
        title: 'Settings'
    },
    {
        icon: 'exit',
        title: 'Log out'
    },
    'divider',
    {
        icon: 'info',
        title: 'Customer Support'
    },
    {
        icon: 'share',
        title: 'Share your shop'
    },
    {
        icon: 'eye',
        title: 'View your shop'
    }
];

interface NavListItemProps {
    selected: string;
    item: NavLink;
    onLinkSelected: (link: string) => void;
}

const NavListItem = ({ selected, item, onLinkSelected }: NavListItemProps) => {
    
    const Icon = item.icon && item.icon in icons ? icons[item.icon as keyof typeof icons] : null;
    const theme = useTheme();

    const color = selected === item.title ? theme.palette.primary.main : theme.palette.primary.dark;
    
    return (
        <ListItem disablePadding>
            <ListItemButton sx={{
                borderLeft: `${selected === item.title ? '4' : '0'}px solid ${color}`
            }} onClick={() => onLinkSelected(item.title)}>
                <ListItemIcon>
                    { Icon && <Icon color={color} /> }
                </ListItemIcon>
                <ListItemText>
                    <Typography sx={{
                        fontSize: '14px',
                        fontWeight: '400',
                        lineHeight: '16px',
                        color: color
                    }}>
                        {item.title}
                    </Typography>
                </ListItemText>
            </ListItemButton>
        </ListItem>
    );
};



interface NavListCollapsableProps {
    selected: string;
    item: NavCollapsable;
    onSubLinkSelected: (link: string) => void;
}

const NavListCollapsable = ({ selected, item, onSubLinkSelected }: NavListCollapsableProps) => {
    
    const [isOpen, setIsOpen] = useState(item.isOpen);
    const Icon = item.icon && item.icon in icons ? icons[item.icon as keyof typeof icons] : null;
    const theme = useTheme();
    
    return (
        <ListItem disablePadding sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch'
        }}>
            <ListItemButton onClick={() => setIsOpen(prev => !prev)}>
                <ListItemIcon>
                    { Icon && <Icon color={theme.palette.primary.dark} /> }
                </ListItemIcon>
                <ListItemText>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Typography sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '16px',
                            color: `${theme.palette.primary.dark}`
                        }}>
                            {item.title}
                        </Typography>
                        {isOpen ? <ExpandLess sx={{margin: '0'}}/> : <ExpandMore sx={{margin: '0'}}/>}
                    </Box>
                </ListItemText>
            </ListItemButton>
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{
                        bgcolor: '#E9F8FE'
                    }}>
                        {item.subLinks.map(subItem => {
                            return (
                                <NavListItem selected={selected} item={subItem} onLinkSelected={onSubLinkSelected} />
                            );
                        })}
                    </List>
            </Collapse>
        </ListItem>
    );
}

const NavList = () => {

    const [selected, setSelected] = useState('Dashboard');

    const selectLink = useCallback((link: string) => setSelected(link), []);

    return (
        <List disablePadding sx={{
            width: '100%'
        }}>
            {
                links.map(link => {
                    return (
                        link === 'divider'  ? <Divider sx={{
                            marginTop: '5px',
                            marginBottom: '5px'
                        }}/> : 'subLinks' in link
                        ? <NavListCollapsable selected={selected} item={link} onSubLinkSelected={selectLink}/>
                        : <NavListItem selected={selected} item={link} onLinkSelected={selectLink} />
                    );
                })
            }
        </List>
    );
}

const Sidebar = () => {

    const theme = useTheme();

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            bgcolor: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Box sx={{
                width: 'calc(100% - 48px)',
                height: '60px',
                paddingLeft: '24px',
                paddingRight: '24px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <img src={Logo} alt="vetrinalive"/>
                <MenuIcon color={theme.palette.primary.dark} />
            </Box>
            <NavList />
            <FormControl sx={{
                width: '200px',
                marginTop: '50px'
            }}>
                <Typography>
                    Select your shop
                </Typography>
                <Select id="shop-select" value={0}>
                    <MenuItem value={0}>Fenoh store</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default Sidebar;