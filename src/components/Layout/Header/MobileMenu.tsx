// MobileMenu.tsx
import React from 'react';
import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import {MenuType} from "../../../constants/layout.ts";
import {t} from "../../../utils/translate.ts";
import {useLanguageContext} from "../../../contexts/LanguageContext.tsx";
import {LANGUAGE} from "../../../constants/common.ts";
interface MobileMenuProps {
    menu: MenuType[];
    open: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menu, open, onClose }) => {
    const {language} =useLanguageContext();
    console.log(language);

    return (
        <Drawer
            anchor={language === LANGUAGE.AR ? 'left': 'right' }
            open={open}
            onClose={onClose}
        >
            <List sx={{ width: 250 }}>
                {menu.map((item) => (
                    <React.Fragment key={item.text}>
                        <ListItemButton>
                            <ListItemText primary= {t(`menu.${item.text}`, language)}/>
                        </ListItemButton>
                        {/* If item.subItems, list them or create an Accordion */}
                    </React.Fragment>
                ))}
            </List>
        </Drawer>
    );
};

export default MobileMenu;
