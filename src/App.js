import { useEffect } from "react";


function App() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ipapi.co/json'

        // Just in case I want to add headers
            // , {
            //   method: 'GET',
            //   headers: {
            //     'X-RapidAPI-Key': '617613e6b7msh38a292b67a972c1p1fc264jsn5c45f98f2a6b',
            //     'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
            //   }}
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          // Redirect to the VSCO website
          // window.location.href = 'https://vsco.co/hiten1409/gallery';
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
