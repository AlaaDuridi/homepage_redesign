import { FC } from 'react';
import { IQuestion } from '../../../types/models/question.model.ts';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { useLanguageContext } from '../../../contexts/LanguageContext.tsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { t } from '../../../utils/translate.ts';

interface IQuestionProps {
  question: IQuestion;
}
const Question: FC<IQuestionProps> = ({ question }) => {
  const theme = useTheme();
  const { language } = useLanguageContext();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', mb: 3 }}>
      <Typography variant='h6' fontWeight='bold' color={theme.palette.primary.main}>
        {question.category.name}
      </Typography>
      <Typography variant='body1' sx={{ mt: 1 }}>
        {question.text.slice(0, 100)}...
      </Typography>
      <Button
        href={`/question/${question.id}`}
        sx={{ mt: 1, alignSelf: 'start', color: theme.palette.secondary.main }}
        endIcon={
          theme.direction === 'rtl' ? (
            <ArrowBackIcon color={'secondary'} />
          ) : (
            <ArrowForwardIcon color={'secondary'} />
          )
        }
      >
        {t('home.read_more', language)}
      </Button>
    </Box>
  );
};
export default Question;
