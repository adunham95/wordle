import { Header } from '../components/header';
import Keyboard from '../components/keyboard';
import WordRow from '../components/wordRow/wordRow';

function HomePage() {
  return (
    <>
      <Header />
      <div className="word-container overflow-auto">
        <WordRow />
        <WordRow />
        <WordRow />
        <WordRow />
        <WordRow />
        <WordRow />
        <WordRow />
        <WordRow />
        <WordRow />
      </div>
      <Keyboard />
    </>
  );
}

export default HomePage;
