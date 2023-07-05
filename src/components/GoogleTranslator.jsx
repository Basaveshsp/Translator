import { useEffect, useState } from "react";

const GoogleTranslator = () => {
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

    let [translatedtext,settranslatedtext]=useState("");
     let translate=()=>{
                const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': '2c52477029msha1fec01da61360dp1fe65fjsn57aed05482d6',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            body: new URLSearchParams({
                q: document.getElementById("input").value,
                target: document.getElementById("lang").value ,
                source: 'en'
            })
};
        fetch(url,options)
        .then((res)=>{return res.json()})
        .then((data)=>{
            console.log(data.data.translations[0].translatedText);
            settranslatedtext(data.data.translations[0].translatedText)
            
        })
    }

    return ( 
       <div className="translatepage">
        <h1>Language translator</h1>
        <hr />
        <textarea name="" id="input" cols="100" rows="14"></textarea><br />
        {
            languages!=null && <select  id="lang">
                <option >--SELECT--</option>
                {
                    languages.map((lang)=>{return(<option>{lang.language}</option>)})
                }
            </select>
        }
        <br />
        <button onClick={translate}>TRANSLATE</button><br />
        <textarea name="" id="" cols="80" rows="14" value={translatedtext}></textarea>
       </div>
     );
}
 
export default GoogleTranslator;