import React, { useState, useEffect } from 'react'
import {
    Button,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Pagination,
    PaginationItem,
    PaginationLink,
    Table,
    Container,
    Row,
    } from "reactstrap";
import Header from "../../components/Headers/Header.jsx";
import { useTranslation } from 'react-i18next';
import { GetCategoryService } from '../../services/CategoryService.js';
import CreateCategoryModal from './modal/CreateCategoryModal';
import UpdateCategoryModal from './modal/UpdateCategoryModal';
import { selected } from '../../redux/slides/categorySlide';
import { useDispatch } from 'react-redux';

const Category = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [categories, setCategories] = useState();
    const [message, setMessage] = useState();
    const [modalCreateShow, setModalCreateShow] = useState(false);
    const [modalUpdateShow, setModalUpdateShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState();

    useEffect(()=> {
        getCategories();
    }, []);

    const getCategories = async () => {
        try {
            const data = await GetCategoryService();
            setCategories(data.categories);
        } catch (error) {
            setMessage('Failed to call api');
        }
    }

    const handleShowCreateModal = () => {
        setModalCreateShow(true);
    }

    const handleShowUpdateModal = (item) => {
        setSelectedItem(item);
        setModalUpdateShow(true);
    }

    return (
        <>
            <Header />
            {/* Page content */}
            <Container className="mt--7" fluid>
            {/* Table */}

            <Row>
                <div className="col">
                <Card className="shadow">
                    <CardHeader className="border-0">
                        <h3 className="mb-0" style={{display: "inline"}}>{t("category.table")}</h3>
                        <Button
                            color="primary"
                            type="button"
                            onClick={handleShowCreateModal}
                            style={{float: "right"}}
                        >
                        {t('common.add')}
                        </Button>
                    </CardHeader>
                    <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">{t('common.name_vi')}</th>
                            <th scope="col">{t('common.name_en')}</th>
                            <th scope="col">{t('common.description_vi')}</th>
                            <th scope="col">{t('common.description_en')}</th>
                            <th scope="col">{t('common.created_at')}</th>
                            <th scope="col"/>
                        </tr>
                    </thead>
                    <tbody>
                        { categories && categories.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td scope="row">
                                        <span className="mb-0 text-sm">
                                            {item.name_vi}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="mb-0 text-sm">
                                            {item.name_en}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="mb-0 text-sm">
                                            {item.description_vi}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="mb-0 text-sm">
                                            {item.description_en}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="mb-0 text-sm">
                                            {item.created_at}
                                        </span>
                                    </td>
                                    <td className="text-right">
                                        <UncontrolledDropdown>
                                        <DropdownToggle
                                            className="btn-icon-only text-light"
                                            href="#pablo"
                                            role="button"
                                            size="sm"
                                            color=""
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fas fa-ellipsis-v" />
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-arrow" right>
                                            <DropdownItem
                                            href="#pablo"
                                            onClick={() => handleShowUpdateModal(item)}
                                            >
                                            Edit
                                            </DropdownItem>
                                            <DropdownItem
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            >
                                            Another action
                                            </DropdownItem>
                                            <DropdownItem
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            >
                                            Something else here
                                            </DropdownItem>
                                        </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    </Table>
                    <CardFooter className="py-4">
                    <nav aria-label="...">
                        <Pagination
                        className="pagination justify-content-end mb-0"
                        listClassName="justify-content-end mb-0"
                        >
                        <PaginationItem className="disabled">
                            <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            tabIndex="-1"
                            >
                            <i className="fas fa-angle-left" />
                            <span className="sr-only">Previous</span>
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem className="active">
                            <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            >
                            1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            >
                            2 <span className="sr-only">(current)</span>
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            >
                            3
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            >
                            <i className="fas fa-angle-right" />
                            <span className="sr-only">Next</span>
                            </PaginationLink>
                        </PaginationItem>
                        </Pagination>
                    </nav>
                    </CardFooter>
                </Card>
                </div>
            </Row>
            {/* Dark table */}
            </Container>
            <CreateCategoryModal
                show={modalCreateShow}
                onHide={() => setModalCreateShow(false)}
                refresh={getCategories}
            />
            {modalUpdateShow && (
                <UpdateCategoryModal
                    show={modalUpdateShow}
                    item={selectedItem}
                    onHide={() => setModalUpdateShow(false)}
                />
                )
            }
        </>
    )
}

export default Category