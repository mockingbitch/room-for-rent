import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import AdminFooter from "../components/Footers/AdminFooter.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import { useSelector } from "react-redux";
import routes from "../routes.js";
import { useHistory  } from "react-router-dom";

const HouseHolder = (props) => {
    const mainContent = React.useRef(null);
    const location = useLocation();
    const auth = useSelector(state => state.auth);
    const history  = useHistory();

    React.useEffect(() => {
        if (auth.user === null || auth.isLoggedIn === false) {
        console.log(auth.user);
        history.push('/auth/login');
        }
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainContent.current.scrollTop = 0;
    }, [location]);

    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
        if (prop.layout === "/householder") {
            return (
            <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
            />
            );
        } else {
            return null;
        }
        });
    };

    const getBrandText = (path) => {
        for (let i = 0; i < routes.length; i++) {
        if (
            props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
            -1
        ) {
            return routes[i].name;
        }
        }
        return "Brand";
    };

    return (
        <>
            <Sidebar
                {...props}
                routes={routes}
                logo={{
                innerLink: "/householder/index",
                imgSrc: require("../assets/img/brand/argon-react.png"),
                imgAlt: "..."
                }}
            />
            <div className="main-content" ref={mainContent}>
                <AdminNavbar
                {...props}
                brandText={getBrandText(props.location.pathname)}
                />
                <Switch>
                {getRoutes(routes)}
                <Redirect from="*" to="/householder/index" />
                </Switch>
                <Container fluid>
                <AdminFooter />
                </Container>
            </div>
        </>
    );
};

export default HouseHolder;
