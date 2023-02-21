import React from 'react'
import {
    // Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    // Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    // Progress,
    Table,
    Container,
    Row,
    // UncontrolledTooltip
    } from "reactstrap";
import Header from "../../components/Headers/Header.jsx";
import { useTranslation } from 'react-i18next';

const Category = () => {
    const {t} = useTranslation();

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
                    <h3 className="mb-0">{t("category.table")}</h3>
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
                        <tr>
                            <td scope="row">
                                <span className="mb-0 text-sm">
                                    Argon Design System
                                </span>
                            </td>
                            <td>
                                <span className="mb-0 text-sm">
                                    Argon Design System
                                </span>
                            </td>
                            <td>
                                <span className="mb-0 text-sm">
                                    Argon Design System
                                </span>
                            </td>
                            <td>
                                <span className="mb-0 text-sm">
                                    Argon Design System
                                </span>
                            </td>
                            <td>
                                <span className="mb-0 text-sm">
                                    Argon Design System
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
                                    onClick={(e) => e.preventDefault()}
                                    >
                                    Action
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
        </>
    )
}

export default Category