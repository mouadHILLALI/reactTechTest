export async function fetchData(){
    try{
        const data = await fetch(import.meta.env.VITE_API_URL).then((res => res.json()))
        console.log(data);
        return data ;
    }catch(error){
        console.log(error);
    }

}