import './App.css';

function App() {
  //j'ai travaillé avec google-map-generator sans l'utilisation des API et j'ai utilisé purement HTML5
  return (
    <div className="App">
     <h1>Adresse Go My Code:</h1>
     <iframe width="792" height="826" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=792&amp;height=826&amp;hl=en&amp;q=GoMyCode%20Hackerspace,%201%20Place%20Tahar%20Haddad,%201%20Tunis%20%20Tunis+()&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

    </div>
  );
}

export default App;
