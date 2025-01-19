import { FC } from 'react';
import { Box, Typography, Modal, Grid, Avatar } from '@mui/material';
import { MenuType } from '../../../constants/layout.ts';
import { t } from '../../../utils/translate.ts';
import { useLanguageContext } from '../../../contexts/LanguageContext.tsx';
import { BACKEND_IMAGES } from '../../../constants/common.ts';

interface ICountriesModalProps {
  subItems: MenuType[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CountrySelectionModal: FC<ICountriesModalProps> = ({ subItems, isOpen, setIsOpen }) => {
  const { language } = useLanguageContext();
  const handleClose = () => setIsOpen(false);

  return (
    <Box>
      {/* Modal */}
      <Modal open={isOpen} onClose={handleClose} aria-labelledby='country-modal-title'>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id='country-modal-title' variant='h6' sx={{ mb: 3, textAlign: 'center' }}>
            {t(`menu.choose_country`, language)}
          </Typography>

          {/* Country List */}
          <Grid container spacing={2}>
            {subItems.map((country) => (
              <Grid
                item
                xs={4}
                key={country.text}
                sx={{
                  textAlign: 'center',
                  cursor: 'pointer',
                  '&:hover': { bgcolor: 'grey.100', borderRadius: 1 },
                }}
              >
                <Avatar
                  alt={country.text}
                  src={` ${BACKEND_IMAGES}${country.icon}`}
                  sx={{ width: 64, height: 64, mx: 'auto', mb: 1 }}
                />
                <Typography variant='body2'>{t(`menu.${country.text}`, language)}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default CountrySelectionModal;
