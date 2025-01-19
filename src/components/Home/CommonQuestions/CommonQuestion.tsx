import { FC, useState, useEffect } from 'react';
import { IQuestion } from '../../../types/models/question.model.ts';
import { Skeleton, Grid, Typography, useTheme, Pagination } from '@mui/material';
import { toast } from 'react-toastify';
import QuestionsService from '../../../services/question.service.ts';
import QuestionCard from './QuestionCard.tsx';
import { t } from '../../../utils/translate.ts';
import { useLanguageContext } from '../../../contexts/LanguageContext.tsx';

const ITEMS_PER_PAGE = 4;

const CommonQuestion: FC = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const theme = useTheme();
  const { language } = useLanguageContext();

  const totalPages = Math.ceil(questions.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const fetchQuestions = async () => {
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

    void fetchQuestions();
  }, []);

  const handlePageChange = (_: unknown, page: number) => {
    setCurrentPage(page);
  };

  const paginatedQuestions = questions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <Grid container>
      <Grid
        container
        item
        sx={{
          borderRadius: theme.spacing(2),
          px: theme.spacing(4),
          textAlign: 'center',
        }}
      >
        <Typography
          pt={theme.spacing(2)}
          variant='h4'
          sx={{
            mb: theme.spacing(4),
            fontWeight: 'bold',
          }}
        >
          {t('home.common_questions_title', language)}
        </Typography>
      </Grid>

      <Grid container spacing={4}>
        {isLoading
          ? Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
              <Grid item md={12} key={index} mx={theme.spacing(4)}>
                <Skeleton
                  sx={{ borderRadius: theme.spacing(3) }}
                  width='100%'
                  variant='rectangular'
                  height={100}
                />
              </Grid>
            ))
          : paginatedQuestions.map((question) => (
              <Grid
                container
                item
                key={question.id}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  p: theme.spacing(2),
                  mb: theme.spacing(2),
                }}
              >
                <QuestionCard question={question} questionId={question.id} />
              </Grid>
            ))}
      </Grid>

      {/* Pagination Component */}
      {!isLoading && (
        <Grid
          container
          item
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: theme.spacing(4),
          }}
        >
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color='primary'
          />
        </Grid>
      )}
    </Grid>
  );
};

export default CommonQuestion;
