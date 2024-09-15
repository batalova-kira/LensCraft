import { About } from "./components/About/About";
import { Contacts } from "./components/Contacts/Contacts";
import { Home } from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import { Services } from "./components/Services/Services";
import { Works } from "./components/Works/Works";
import { ThemeProvider } from "./theme";

function App() {
    return (
        <ThemeProvider>
            <Layout>
                <Home />
                <About />
                <Works />
                <Services />
                <Contacts />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
