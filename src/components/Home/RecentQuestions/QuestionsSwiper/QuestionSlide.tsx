import { FC } from 'react';
import { Grid, Box, Typography, Button, useTheme } from '@mui/material';
import { IQuestion } from '../../../../types/models/question.model.ts';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { t } from '../../../../utils/translate.ts';
import { useLanguageContext } from '../../../../contexts/LanguageContext.tsx';
import { QUESTIONS_SECTION_IMAGE } from '../../../../constants/home.ts';
import { LANGUAGE } from '../../../../constants/common.ts';

interface IQuestionSlideProps {
  question: IQuestion;
}

const QuestionSlide: FC<IQuestionSlideProps> = ({ question }) => {
  const theme = useTheme();
  const { language } = useLanguageContext();

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = QUESTIONS_SECTION_IMAGE;
    event.currentTarget.onerror = null;
  };
  return (
    <>
      <Grid
        height={'100%'}
        gap={3}
        container
        justifyContent='space-around'
        alignItems='center'
        direction={'column'}
      >
        <Box
          component={'img'}
          onError={handleImageError}
          src={language === LANGUAGE.AR ? question.category.photo : question.category.photo_en}
          alt={language === LANGUAGE.AR ? question.category.name : question.category.name_en}
          style={{ width: '60%', borderRadius: '10%', height: 'auto' }}
        />
        <Typography variant={'subtitle1'}>{question.text.slice(0, 100)}...</Typography>
        <Button
          fullWidth
          variant='text'
          color='secondary'
          href={`/question/${question.id}`}
          target={'_blank'}
          endIcon={
            theme.direction === 'rtl' ? (
              <ArrowBackIcon color={'secondary'} />
            ) : (
              <ArrowForwardIcon color={'secondary'} />
            )
          }
        >
          <Typography noWrap variant={'h5'} color={'secondary'}>
            {t('home.read_more', language)}
          </Typography>
        </Button>
      </Grid>
    </>
  );
};
export default QuestionSlide;
