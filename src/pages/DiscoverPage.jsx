import VisitDenmark from '../assets/img/VisitDenmark-hvid.png';
import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';
import FavoriteIcon from '@mui/icons-material/Favorite';

function DiscoverPage() {
  return (
    <main className='discover'>
      <img
        className='discover__logo'
        src={VisitDenmark}
        alt='visitdenmark-logo'
      ></img>
      <h1 className='discover__heading'>Discover</h1>
      <div className='discover__buttons-container'>
        <CloseIcon className='discover__icon icon-close' />
        <ReplayIcon className='discover__icon icon-replay' />
        <FavoriteIcon className='discover__icon icon-favorite' />
      </div>
    </main>
  );
}

export default DiscoverPage;
