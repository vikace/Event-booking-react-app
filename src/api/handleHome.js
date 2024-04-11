import axios from 'axios';
export default async function handleHome()
{
    var result={
        code:0,
        data:""
    };
    const url="/home"
    await axios.get(url).then((response)=>{
        result.data=response.data;
        result.code=response.status;
    }).catch((error)=>{
        result.data=error.data;
        result.code=error.status;
    });
    return result;
}