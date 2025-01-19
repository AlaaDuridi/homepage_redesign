import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  ListItemIcon,
  Box,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { MenuType } from '../../../constants/layout.ts';
import { t } from '../../../utils/translate.ts';
import { useLanguageContext } from '../../../contexts/LanguageContext.tsx';
import { BACKEND_IMAGES, LANGUAGE } from '../../../constants/common.ts';

interface MobileMenuProps {
  menu: MenuType[];
  open: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menu, open, onClose }) => {
  const { language } = useLanguageContext();
  const [openIndexes, setOpenIndexes] = useState<{ [key: string]: boolean }>({});

  const toggleSubMenu = (key: string) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderMenu = (menuItems: MenuType[], parentKey: string = '') => {
    return menuItems.map((item, index) => {
      const key = `${parentKey}-${index}`;
      const hasSubItems = item.subItems && item.subItems.length > 0;

      return (
        <React.Fragment key={key}>
          <ListItemButton onClick={() => hasSubItems && toggleSubMenu(key)}>
            {item.icon && (
              <ListItemIcon>
                <img
                  src={` ${BACKEND_IMAGES}${item.icon}`}
                  alt={item.text}
                  width={20}
                  height={20}
                />
              </ListItemIcon>
            )}
            <ListItemText
              primary={t(`menu.${item.text}`, language)}
              sx={{ pl: item.icon ? 1 : 0 }} // Add spacing if there's an icon
            />
            {hasSubItems && (openIndexes[key] ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>

          {/* Recursive Sub-items */}
          {hasSubItems && (
            <Collapse in={openIndexes[key]} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                {renderMenu(item.subItems, key)} {/* Recursive rendering */}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <Drawer anchor={language === LANGUAGE.AR ? 'left' : 'right'} open={open} onClose={onClose}>
      <Box sx={{ width: 250 }}>
        <List>{renderMenu(menu)}</List>
      </Box>
    </Drawer>
  );
};

export default MobileMenu;
