import { FC, useState, useEffect } from 'react';
import { IQuestion } from '../../../types/models/question.model.ts';
import { Skeleton, Box, Grid, Typography, useTheme } from '@mui/material';
import { toast } from 'react-toastify';
import QuestionsService from '../../../services/question.service.ts';
import QuestionCard from './QuestionCard.tsx';
import { t } from '../../../utils/translate.ts';
import { useLanguageContext } from '../../../contexts/LanguageContext.tsx';

const CommonQuestion: FC = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const theme = useTheme();
  const { language } = useLanguageContext();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setIsLoading(true);
        const result = await QuestionsService.list();
        if (result) {
          setQuestions(result);
          console.log('result', result);
        }
      } catch {
        toast.error('An unexpected error occurred.');
      } finally {
        setIsLoading(false);
      }
    };

    void fetchQuestions();
  }, []);

  return (
    <Grid container>
      <Typography variant='h5' gutterBottom>
        {t('home.common_questions_title', language)}
      </Typography>

      <Grid container item spacing={2}>
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <Grid item md={12} key={index}>
                <Skeleton width={1500} variant='rectangular' height={100} />
              </Grid>
            ))
          : questions.map((question) => (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  p: theme.spacing(2),
                  mb: theme.spacing(2),
                }}
                key={question.id}
              >
                <QuestionCard question={question} questionId={question.id} />
              </Box>
            ))}
      </Grid>
    </Grid>
  );
};

export default CommonQuestion;
