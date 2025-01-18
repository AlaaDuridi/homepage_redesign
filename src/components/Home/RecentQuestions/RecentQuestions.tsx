import { FC } from 'react';
import { Box, Grid, Typography, List, ListItem, useTheme } from '@mui/material';
import { IQuestion } from '../../../types/models/question.model.ts';
import { QUESTIONS_SECTION_IMAGE } from '../../../constants/home.ts';
import Question from './Question.tsx';
import { t } from '../../../utils/translate.ts';
import { useLanguageContext } from '../../../contexts/LanguageContext.tsx';

interface QuestionsSectionProps {
  questions: IQuestion[];
}

const RecentQuestions: FC<QuestionsSectionProps> = ({ questions }) => {
  const theme = useTheme();
  const { language } = useLanguageContext();

  return (
    <Grid
      container
      item
      sx={{
        borderRadius: theme.spacing(2),
        px: theme.spacing(4),
        textAlign: 'center',
      }}
    >
      {/* Title */}
      <Typography
        pt={theme.spacing(2)}
        variant='h4'
        sx={{
          mb: theme.spacing(4),
          fontWeight: 'bold',
        }}
      >
        {t('home.recent_questions_title', language)}
      </Typography>

      {/* Grid Layout */}
      <Grid container spacing={4}>
        {/* Left: Scrollable Questions List */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              maxHeight: '600px',
              overflowY: 'auto',
              backgroundColor: theme.palette.background.paper,
              borderRadius: theme.spacing(1),
              boxShadow: theme.shadows[1],
              p: theme.spacing(2),
            }}
          >
            <List>
              {questions.map((question) => (
                <ListItem
                  key={question.id}
                  divider
                  sx={{
                    '&:hover': {
                      backgroundColor: theme.palette.grey[200],
                    },
                  }}
                >
                  <Question question={question} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>

        {/* Right: Default Image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <img
            src={QUESTIONS_SECTION_IMAGE}
            alt='Default Illustration'
            style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: theme.spacing(2),
              boxShadow: theme.shadows[2],
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RecentQuestions;
