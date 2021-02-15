import s from "../../Users/Users.module.css";
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import * as classnames from "classnames";

let Paginator = ({totalCount, amountUsersOnPage, currentPage, changePage, step = 10, visiblePages = 4,  ...props}) => {

    let pagesCount = Math.ceil(totalCount / amountUsersOnPage);

    const [firstPage, setFirstPage] = useState(1);
    const [lastPage, setlastPage] = useState(visiblePages);

    let pages = [];

    for (let i = firstPage; i <= lastPage; i++) {
        pages.push(i);
    }

    const decreasePage = () => {
        firstPage - step >= 1 ? setFirstPage(firstPage - step) : setFirstPage(1);
        lastPage - step >= visiblePages ? setlastPage(lastPage - step) : setlastPage(visiblePages);
    };

    const increasePage = () => {
        firstPage + step <= pagesCount - visiblePages ? setFirstPage(firstPage + step) : setFirstPage(pagesCount - visiblePages);
        lastPage + step <= pagesCount ? setlastPage(lastPage + step) : setlastPage(pagesCount);
    };

    return (
        <div className={s.navigation}>
            { firstPage !== 1 && <button onClick={decreasePage}><FontAwesomeIcon icon="angle-double-left" /></button>}
            {pages.map((p) => {
                let classNames = classnames(s.page, currentPage === p ? s.selectedPage : '');
                return <span className={classNames}
                             onClick={() => {
                                 changePage(p)
                             }}
                             key={p}
                >{p}</span>
            })}
            { lastPage !== pagesCount && <button onClick={increasePage}><FontAwesomeIcon icon="angle-double-right" /></button>}
        </div>
    );
};

export default Paginator;
