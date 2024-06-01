import { Push, Wrapper } from "./App.styles";
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Wrapper>
        <Home />
        <Push />
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
