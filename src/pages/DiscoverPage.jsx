import VisitDenmark from '../assets/img/VisitDenmark-hvid.png';
import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';
import { Stack } from '../components/Stack';
import styled from '@emotion/styled';

function DiscoverPage() {
  const Item = styled.div`
    background: #f9fafb;
    width: 200px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    text-shadow: 0 10px 10px #d1d5db;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    transform: ${() => {
      let rotation = Math.random() * (5 - -5) + -5;
      return `rotate(${rotation}deg)`;
    }};
  `;

  return (
    <main className='discover'>
      <img
        className='discover__logo'
        src={VisitDenmark}
        alt='visitdenmark-logo'
      ></img>
      <h1 className='discover__heading'>Discover</h1>
      <Stack onVote={(item, vote) => console.log(item.props, vote)}>
        <Item data-value='waffles' whileTap={{ scale: 1.15 }}>
          🧇
        </Item>
        <Item data-value='pancakes' whileTap={{ scale: 1.15 }}>
          🥞
        </Item>
        <Item data-value='donuts' whileTap={{ scale: 1.15 }}>
          🍩
        </Item>
      </Stack>
      <div className='discover__buttons-container'>
        <CloseIcon className='discover__icon icon-close' />
        <ReplayIcon className='discover__icon icon-replay' />
        <FavoriteIcon className='discover__icon icon-favorite' />
      </div>
    </main>
  );
}

export default DiscoverPage;
