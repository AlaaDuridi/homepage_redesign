import { FC, useState, useEffect } from 'react';
import QuestionSkeleton from '../../Skeleton/RecentQuestions.tsx';
import { IQuestion } from '../../../types/models/question.model.ts';
import QuestionsService from '../../../services/question.service.ts';
import { toast } from 'react-toastify';
import RecentQuestions from './RecentQuestions.tsx';
import QuestionsSwiper from './QuestionsSwiper/QuestionsSwiper.tsx';
import { useMediaQuery, Grid, useTheme, Typography } from '@mui/material';
import { t } from '../../../utils/translate.ts';
import { useLanguageContext } from '../../../contexts/LanguageContext.tsx';
const QuestionsSection: FC = () => {
  const theme = useTheme();
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { language } = useLanguageContext();

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        setIsLoading(true);
        const result = await QuestionsService.list();
        if (result) {
          setQuestions(result);
        }
      } catch {
        toast.error('An unexpected error occurred.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchQuestion();
  }, []);

  return (
    <Grid container>
      {isLoading ? (
        <QuestionSkeleton />
      ) : (
        <Grid container justifyContent={'center'}>
          {isMobile ? (
            <>
              <Grid
                item
                container
                pt={theme.spacing(2)}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Typography
                  variant='h4'
                  sx={{
                    mb: theme.spacing(4),
                    fontWeight: 'bold',
                  }}
                >
                  {t('home.recent_questions_title', language)}
                </Typography>
              </Grid>
              <QuestionsSwiper questions={questions} />
            </>
          ) : (
            <RecentQuestions questions={questions} />
          )}
        </Grid>
      )}
    </Grid>
  );
};
export default QuestionsSection;
