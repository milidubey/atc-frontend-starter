

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/pages/home';


const RouteLinks = () => {
    return (
        <Router>
            <Switch>
                <Home />
            </Switch>
        </Router>
    )
}

export default RouteLinks;