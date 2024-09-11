import CircularProgress from '@mui/material/CircularProgress';
export const Loading = ()=>{
    return <div className='h-screen w-screen flex flex-col items-center justify-center'>
        <CircularProgress color="info"  value={75}  />
    </div>  
}   