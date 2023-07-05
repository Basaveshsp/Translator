import { useEffect, useState } from "react";

const Translate = () => {
    let[languages ,setlanguages]=useState(null);
    useEffect(()=>{
        const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages';
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/octet-stream',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': '2c52477029msha1fec01da61360dp1fe65fjsn57aed05482d6',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            }
        };
        
       fetch(url,options)
       .then((res)=>{return res.json()})
       .then((data)=>{console.log(data.data.languages); setlanguages(data.data.languages)})
    } ,[])
    return ( 
       <div className="translatepage">
        <h1>Language translator</h1>
        <hr />
        <textarea name="" id="" cols="100" rows="14"></textarea><br />
        {
            languages!=null && <select >
                <option >--SELECT--</option>
                {
                    languages.map((lang)=>{return(<option>lang.language</option>)})
                }
            </select>
        }
       </div>
     );
}
 
export default Translate;