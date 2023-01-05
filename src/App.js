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
import Footer from "./components/layouts/Footer";
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

  const DefaultLayout = ({ children }) => {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  }

  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout> <Home /> </DefaultLayout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<DefaultLayout> <About /> </DefaultLayout>} />
        <Route path="/marketplace" element={<DefaultLayout> <MarketPlace /> </DefaultLayout>} />
        <Route path="/marketplace/*" element={<DefaultLayout> <Product /> </DefaultLayout>} />
        <Route path="/cart" element={<Private> <DefaultLayout> <Cart /> </DefaultLayout> </Private>} />
        <Route path="/profile" element={<Private> <DefaultLayout> <Profile /> </DefaultLayout> </Private>} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
