import { Brands } from "./components/Brands";
import { Credits } from "./components/Credits";
import { Description1 } from "./components/Description1";
import { Description2 } from "./components/Description2";
import { Description3 } from "./components/Description3";
import { Description4 } from "./components/Description4";
import { Description5 } from "./components/Description5";
import { Description6 } from "./components/Description6";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Message1 } from "./components/Message1";
import { Message2 } from "./components/Message2";
import { Message3 } from "./components/Message3";
import { Proposal1 } from "./components/Proposal1";
import { Proposal2 } from "./components/Proposal2";
import { Proposal3 } from "./components/Proposal3";

function App() {
  return (
    <div className="bg-black">
      <Header/>
      <Home/>
      <Brands/>
      <Description1/>
      <Description2/>
      <Message1/>
      <Proposal1/>
      <Description3/>
      <Message2/>
      <Description4/>
      <Credits/> 
      <Proposal2/>
      <Message3/>
      <Description5/>
      <Description6/>
      <Proposal3/>
      <Footer/>
    </div>
  );
}

export default App;
