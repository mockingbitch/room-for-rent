import React from 'react'

const Header = () => {
    return (
        <div className="headerTop">
            <div className="container">
                <div className="navPc">
                    <div className="navPc__left">
                        <a href="">
                            <div className="logo">
                                <i>
                                    <img src="/img/logo/DotTrees.svg" alt="DotTrees" />
                                </i>
                            </div>
                            <h1>DotTrees</h1>
                        </a>
                    </div>
                    <a href="">
                        <div className="navPc__search">
                            <button className="buttonImage left">
                                <img src="/img/icon/Search.svg" alt="" />
                            </button>
                            <div className="search__wrap">
                                <input
                                    className="pc searchInput"
                                    type="text"
                                    placeholder="Tìm phòng trọ..."
                                    readOnly=""
                                />
                                <textarea
                                    className="mobile searchInput"
                                    type="text"
                                    placeholder="Tìm phòng trọ..."
                                />
                            </div>
                            <button className="buttonImage right">
                                <img src="/img/icon/Category.svg" alt="" />
                            </button>
                        </div>
                    </a>
                <div className="navPc__right">
                    <a href="" className="buttonHeader">
                        Đăng nhập
                    </a>
                    <a href="" className="buttonHeader green">
                        Đăng ký
                    </a>
                    <a href="" className="buttonHeader">
                        Đăng xuất
                    </a>
                </div>
                <div className="lineFull" />
                </div>
            </div>
        </div>
    )
}

export default Header