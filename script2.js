// new quote

async function newQuote(){
    const apiUrl='http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    const proxyUrl='https://cors-anywhere.herokuapp.com';
    try{
        const response=await fetch(proxyUrl+apiUrl);
        const data= await response.json();
        console.log(data);
    }catch(error){
        newQuote();
        console.log('whoops, no error', error);
    }
}

newQuote();
