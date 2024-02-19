import ToggleMode from '@/components/ToggleMode/ToggleMode';
import './Home.scss';

function Home() {
  return (
    <>
      <div className="home">
        <h1>Gameron</h1>
        <ToggleMode />
      </div>
    </>
  );
}

export default Home;
