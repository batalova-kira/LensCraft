import { About } from "./components/About/About";
import { Contacts } from "./components/Contacts/Contacts";
import { Home } from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import { Services } from "./components/Services/Services";

function App() {
    return (
        <>
            <Layout>
                <Home />
                <About />
                <Services />
                <Contacts />
            </Layout>
        </>
    );
}

export default App;
