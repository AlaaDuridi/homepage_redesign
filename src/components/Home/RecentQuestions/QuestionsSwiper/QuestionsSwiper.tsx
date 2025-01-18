import { FC } from 'react';
import { IQuestion } from '../../../../types/models/question.model.ts';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import QuestionSlide from './QuestionSlide.tsx';
import { useTheme } from '@mui/material';

interface IQuestionsSwiperProps {
  questions: IQuestion[];
}
const QuestionsSwiper: FC<IQuestionsSwiperProps> = ({ questions }) => {
  const theme = useTheme();
  return (
    <>
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        style={{ paddingBottom: theme.spacing(1), maxWidth: '50%', margin: '0 auto' }}
      >
        {questions.map((question, index) => (
          <SwiperSlide key={index}>
            <QuestionSlide question={question} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default QuestionsSwiper;
