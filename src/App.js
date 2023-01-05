import { Navigate, Route, Routes } from "react-router-dom";
import { globalStyles } from './components/sititchesConfig'
import Home from "./pages/public/Home";
import Login from "./pages/public/Login";
import MarketPlace from "./pages/public/MarketPlace";
import Product from "./pages/public/MarketPlace/Product";
import About from "./pages/public/About";
import Cart from "./pages/private/Cart";
import Profile from "./pages/private/Profile";
import Header from "./components/layouts/Header";
import { AuthContext, AuthContextProvider } from "./contexts/auth";
import { useContext } from "react";

function App() {
  globalStyles();

  const Private = ({ children }) => {
    const { authenticated, isLoading } = useContext(AuthContext);

    if (isLoading) {
      return <p>loading...</p>
    }

    if (!authenticated) {
      return <Navigate to='/login' />
    }

    return children;
  }

  return (
    <AuthContextProvider>

      <Routes>
        <Route path="/" element={<> <Header /> <Home /> </>} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<> <Header /> <About /> </>} />
        <Route path="/marketplace" element={<> <Header /> <MarketPlace />  </>} />
        <Route path="/marketplace/*" element={<> <Header /> <Product />  </>} />
        <Route path="/cart" element={<Private> <> <Header /> <Cart /> </> </Private>} />
        <Route path="/profile" element={<Private> <> <Header /> <Profile /> </> </Private>} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
