import { Link } from "react-router-dom";
import React from 'react';
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media
} from "reactstrap";
import i18n from '../../translations/i18n.js';
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../redux/slides/authSlide';
import { useHistory  } from "react-router-dom";

const AdminNavbar = (props) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  // const user = useSelector(state => state.auth.user.user);
  // const token = useSelector(state => state.auth.user.access_token);
  const auth = useSelector(state => state.auth);
  const history  = useHistory();

  React.useEffect(() => {
    if (auth.user === null || auth.isLoggedIn === false) {
      console.log(auth.user);
      history.push('/auth/login');
    }
  }, []);

  const handleChangeEN = () => {
    i18n.changeLanguage('en');
  }

  const handleChangeVI = () => {
    i18n.changeLanguage('vi');
  }

  const handleLogout = async () => {
    console.log('logout');
    let token = auth.user !== null ? auth.user.access_token : null;
    const action = logout(token);
    await dispatch(action);
    history.push('/auth/login');
  }

  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {t(props.brandText)}
          </Link>
          <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search" type="text" />
              </InputGroup>
            </FormGroup>
          </Form>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={require("../../assets/img/theme/team-4-800x800.jpg")}
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      {auth.user !== null ? auth.user.name : ''}
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={handleChangeVI}>
                  <i className="ni ni-user-run" />
                  <span>VietNamese</span>
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={handleChangeEN}>
                  <i className="ni ni-user-run" />
                  <span>English</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={handleLogout}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
