import React, {useState, useEffect, useCallback } from 'react'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slides/authSlide'
import { useHistory  } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const Login = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const history  = useHistory();
  const [message, setMessage] = useState('');
  const [data, setData] = useState({
      email: '',
      password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const authRedux = useSelector(state => state.auth);

  useEffect(() => {
      if (authRedux.user.access_token !== undefined) {
          console.log('Logged in', authRedux.user.access_token);
          history.push('/admin/index');
      }
  }, [authRedux])

  const handleOnChange = useCallback(event => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    console.log(data);
  });

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      const action = login(data);
      dispatch(action);
      setIsLoading(false);
    }, 2000)
    }
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>{t('auth.sign_in_with')}</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/github.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/google.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>{t('auth.sign_in_with_credentials')}</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder={t('auth.email')}
                    type="email"
                    name="email"
                    autoComplete="new-email"
                    onChange={(e) => handleOnChange(e)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder={t('auth.password')}
                    type="password"
                    name="password"
                    autoComplete="new-password"
                    onChange={(e) => handleOnChange(e)}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">{t('auth.remember_me')}</span>
                </label>
              </div>
              <div className="text-center">
                <Button
                  className="my-4"
                  color="primary"
                  type="button"
                  onClick={handleSubmit}
                >
                  {t('auth.login')}
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>{t('auth.forgot_password')}</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>{t('auth.create_new_account')}</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
