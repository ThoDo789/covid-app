

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
      getCountries()// get list country  to api
      .then((res)=>{
        setCountries(res.data) // save into state countries
        console.log(countries)
        setSelectCountryId('vn') // set value default when user have not selected input
})

},[])
const handleOnChange=(e)=>{
  setSelectCountryId(e.target.value) //get value input
 
}

useEffect(() => {
  if(selectedCountryId){ 
    const { Slug } = countries.find(country => country.ISO2.toLowerCase() === selectedCountryId); //get slug by query
  
    getReportByCountry(Slug).then((res) => { //pass slug to api url  ex: Viet nam : 'vn' 
      // remove item final
      res.data.pop()
      console.log(res.data)
      setReport(res.data)});// save data into state
      
  }
 
}, [selectedCountryId, countries]);


  return <>
      <CountrySelector countries={countries} 
      onHandleChange={handleOnChange} 
      value={selectedCountryId}
      />
      <Highlight report={report}/>
      <Summary countryId={selectedCountryId}
       report={report} 
       />

  </>
}

export default App;
