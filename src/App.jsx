import Navbar from "./components/NavBar";
import GlobalContext from "./contexts/GlobalContext"

function App() {
    
  const globalProviderValue = {
    
  };

  return (
    <>
      <GlobalContext.Provider value={globalProviderValue}>
        <Navbar />
      </GlobalContext.Provider>  
    </>
  );
};

export default App;