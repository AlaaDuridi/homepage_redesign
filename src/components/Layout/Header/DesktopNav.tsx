import {FC, useState} from "react";
import {Box, Grid, Link, Typography, Menu, MenuItem} from "@mui/material";
import {menu, MenuType} from "../../../constants/layout.ts";
import {t} from "../../../utils/translate.ts";
import {useLanguageContext} from "../../../contexts/LanguageContext.tsx";

const DesktopNav: FC = () => {
        const {language} = useLanguageContext();
        const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
        const [subItems, setSubItems] = useState<MenuType[] | null>(null);
        const [innerSubItems, setInnerSubItems] = useState<MenuType[] | null>(null);
        const [anchorElSub, setAnchorElSub] = useState<null | HTMLElement>(null);

        // Handle mouse enter for menu item
        const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>, subItems: MenuType[]) => {
            console.log('subItems', subItems);
            if (subItems.length > 0) {
                setAnchorEl(event.currentTarget);
                setSubItems(subItems);
            } else {
                setAnchorEl(null);
                setSubItems(null);
            }
        };

        const handlePopoverClose = () => {
            setAnchorEl(null);
            setSubItems(null);
        };

        const handlePopoverSubOpen = (event: React.MouseEvent<HTMLElement>, subItems: MenuType[]) => {
            console.log('subItems', subItems);
            if (subItems.length > 0) {
                setAnchorElSub(event.currentTarget);
                setInnerSubItems(subItems);
            } else {
                setAnchorElSub(null);
                setInnerSubItems(null);
            }
        };

        const handlePopoverSubClose = () => {
            setAnchorElSub(null);
            setInnerSubItems(null);
        };
        return (
            <Grid container item gap={2} justifyContent="center">
                {menu.map((item) => (
                    <Grid item key={item.text}>
                        <Box
                            sx={{cursor: "pointer", position: "relative"}}
                        >
                            <Link
                                onMouseEnter={(event) => !item.triggerModal && handlePopoverOpen(event, item.subItems)}
                            >

                                <Typography variant="body1">{t(`menu.${item.text}`, language)}</Typography>
                            </Link>
                        </Box>
                    </Grid>
                ))}

                {/* Mega Menu Popover */
                }
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handlePopoverClose}
                    anchorOrigin={{vertical: "bottom", horizontal: "center"}}
                    transformOrigin={{vertical: "top", horizontal: "center"}}
                    PaperProps={{
                        style: {
                            width: "100%",
                            left: 0,
                            right: 0,
                            padding: 0,
                        },
                    }}
                >
                    <>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 2,
                                px: 2,
                                flexWrap: "wrap",
                            }}
                        >
                            {subItems?.map((subItem) => (
                                <MenuItem
                                    key={subItem.text}
                                    sx={{
                                        display: "flex", // Keep each item flexible
                                        justifyContent: "center",
                                        minWidth: "auto", // Prevent unnecessary width
                                    }}
                                >
                                    <Link
                                        onClick={(event) => handlePopoverSubOpen(event, subItem.subItems)}
                                        underline="hover" sx={{color: "inherit"}}>
                                        <Typography variant="body1">{t(`menu.${subItem.text}`, language)}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Box>
                    </>

                    <Menu anchorEl={anchorElSub} open={Boolean(anchorElSub)} onClose={handlePopoverSubClose}>
                        {innerSubItems?.map((innerSubItem) => (
                            <MenuItem key={innerSubItem.text}>
                                <Link
                                    underline="hover"
                                    sx={{color: "inherit"}}
                                    href={innerSubItem.link}
                                >
                                    <Typography variant="body1">{t(`menu.${innerSubItem.text}`, language)}</Typography>
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
                </Menu>
            </Grid>
        )
            ;
    }
;

export default DesktopNav;
