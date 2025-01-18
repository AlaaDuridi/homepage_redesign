import { FC, useEffect, useState } from 'react';
import { IQuestion, IQuestionDetails } from '../../../types/models/question.model.ts';
import {
  Card,
  useTheme,
  Skeleton,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@mui/material';
import QuestionsService from '../../../services/question.service.ts';
import { toast } from 'react-toastify';
import { LANGUAGE } from '../../../constants/common.ts';
import { useLanguageContext } from '../../../contexts/LanguageContext.tsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { t } from '../../../utils/translate.ts';

interface IQuestionCardProps {
  questionId: number;
  question: IQuestion;
}

const QuestionCard: FC<IQuestionCardProps> = ({ questionId, question }) => {
  const [questionDetails, setQuestionDetails] = useState<IQuestionDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { language } = useLanguageContext();
  const theme = useTheme();
  useEffect(() => {
    const fetchQuestionDetails = async () => {
      try {
        setIsLoading(true);
        console.log('will fetch details of question', questionId);
        const result = await QuestionsService.get(questionId);
        console.log('result', result);
        if (result) {
          setQuestionDetails(result);
          console.log('result', result);
        }
      } catch {
        toast.error('An unexpected error occurred.');
      } finally {
        setIsLoading(false);
      }
    };

    void fetchQuestionDetails();
  }, [questionId]);

  return (
    <>
      <Card sx={{ width: '100%', mx: theme.spacing(4) }}>
        <CardContent>
          <Typography variant='h6' color='textSecondary' gutterBottom>
            {language === LANGUAGE.AR ? question.category?.name : question.category?.name_en}
          </Typography>
          <Typography variant='body1' sx={{ mt: 1 }}>
            {question?.text}
          </Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            {isLoading ? (
              <Skeleton variant='text' width='40%' />
            ) : (
              questionDetails?.user?.first_name + ' ' + questionDetails?.user?.last_name
            )}
          </Typography>
        </CardContent>
        <CardActions>
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
        </CardActions>
      </Card>
    </>
  );
};

export default QuestionCard;
