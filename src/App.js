import "./App.scss";
import "swiper/swiper.min.css";
import { Route, BrowserRouter } from "react-router-dom";
import Router from "./config/Router";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <Header {...props} />
            <Router />
            <Footer />
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
