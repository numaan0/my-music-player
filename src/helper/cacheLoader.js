import CircularProgress from '@mui/material/CircularProgress';


const CacheLoader = () => (
  
    <div className="bg-orange-200 flex flex-col justify-center items-center h-screen">
      <h1 className='text-center text-gray-950'> Detecting the version changes....</h1>
      <CircularProgress />

    </div>
  );


export default CacheLoader;