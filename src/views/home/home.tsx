import { FC } from 'react';
import HeroSection from '../../components/Home/HeroSection';
import Experts from '../../components/Home/ExpertsSection';
import QuestionsSection from '../../components/Home/RecentQuestions/QuestionsSection.tsx';
import CommonQuestion from '../../components/Home/CommonQuestions/CommonQuestion.tsx';

const Home: FC = () => {
  return (
    <>
      <HeroSection />
      <Experts />
      <QuestionsSection />
      <CommonQuestion />
    </>
  );
};
export default Home;
