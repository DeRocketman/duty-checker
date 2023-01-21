import React, {Component} from "react";
import {
    AppBar,
    Box, Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon, ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TrainIcon from '@mui/icons-material/Train';
import LogoutIcon from '@mui/icons-material/Logout';

export default function MainMenuView() {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Duty-Checker mit React
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer>
                variant="persistent"
                anchor="left"
                open={open}
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DoneAllIcon />
                                </ListItemIcon>
                            </ListItemButton>
                            <ListItemText primary="Dienstüberprüfung" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LibraryBooksIcon />
                                </ListItemIcon>
                            </ListItemButton>
                            <ListItemText primary="Prüfregeln" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AccountBoxIcon />
                                </ListItemIcon>
                            </ListItemButton>
                            <ListItemText primary="Benutzerverwaltung" />
                        </ListItemButton>
                    </ListItem>

                    <Divider />

                    <ListItem>
                        <ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TrainIcon />
                                </ListItemIcon>
                            </ListItemButton>
                            <ListItemText primary="Basisdaten" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LogoutIcon />
                                </ListItemIcon>
                            </ListItemButton>
                            <ListItemText primary="Abmelden" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
}