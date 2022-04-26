function DiscoverPage() {
  return (
    <main className='discover'>
      <h1 className='discover__heading'>Discover</h1>
      <div className='discover__buttons-container'>
        <button className='discover__button button-reject'>Reject</button>
        <button className='discover__button button-rewind'>Rewind</button>
        <button className='discover__button button-accept'>Accept</button>
      </div>
    </main>
  );
}

export default DiscoverPage;
