

import { useEffect, useState } from 'react';
import { getCountries, getReportByCountry } from './apis';
import CountrySelector from './components/CountrySelector';
import Highlight from './components/Highlight';
import Summary from './components/Summary';

function App() {
const [countries, setCountries] = useState([])
const [selectedCountryId,setSelectCountryId] = useState('')
const [report,setReport] = useState([])
useEffect(()=>{
      getCountries()
      .then((res)=>{
        setCountries(res.data)
        console.log(countries)
        setSelectCountryId('vn')
})

},[])
const handleOnChange=(e)=>{
  setSelectCountryId(e.target.value)
 
}

useEffect(() => {
  if(selectedCountryId){
    const { Slug } = countries.find(country => country.ISO2.toLowerCase() === selectedCountryId);
  
    getReportByCountry(Slug).then((res) => {
      // remove item final
      res.data.pop()
      setReport(res.data)});
  }
 
}, [selectedCountryId, countries]);


  return <>
      <CountrySelector countries={countries} onHandleChange={handleOnChange} value={selectedCountryId}/>
      <Highlight report={report}/>
      <Summary countryId={selectedCountryId} report={report} />

  </>
}

export default App;
