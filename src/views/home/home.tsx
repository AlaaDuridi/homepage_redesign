import { FC } from 'react';
import HeroSection from '../../components/Home/HeroSection';
import Experts from '../../components/Home/ExpertsSection';
import QuestionsSection from '../../components/Home/RecentQuestions/QuestionsSection.tsx';
const Home: FC = () => {
  return (
    <>
      <HeroSection />
      <Experts />
      <QuestionsSection />
    </>
  );
};
export default Home;
