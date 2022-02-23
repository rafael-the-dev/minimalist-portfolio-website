import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import loadable from '@loadable/component';

const App = () => {
    const theme = createTheme();

    const HomePage = loadable(() => import(/* webpackChunkName: "HomePage" */ '../Home'));
    const Header = loadable(() => import(/* webpackChunkName: "Header" */ '../../components/Header'));
    const Footer = loadable(() => import(/* webpackChunkName: "Footer" */ '../../components/Footer'));

    return (
        <>
            <StylesProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <Router>
                        <Header />
                        <Routes>
                            <Route exact path="/" element={<HomePage />} />
                        </Routes>
                        <Footer />
                    </Router>
                </ThemeProvider>
            </StylesProvider>
        </>
    )
};

export default App;