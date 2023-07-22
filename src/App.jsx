import { Brands } from "./components/Brands";
import { Credits } from "./components/Credits";
import { Description1 } from "./components/Description1";
import { Description2 } from "./components/Description2";
import { Description3 } from "./components/Description3";
import { Description4 } from "./components/Description4";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Message1 } from "./components/Message1";
import { Message2 } from "./components/Message2";
import { Proposal1 } from "./components/Proposal1";

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
    </div>
  );
}

export default App;
