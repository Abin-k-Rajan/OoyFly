import React, { Fragment } from 'react'
import ListCard from '../../common/Cards/ListCard';



function ListPage() {
    return (
        <Fragment>
            <div className='bd-grid'>
                <ListCard />
                <ListCard />
            </div>
        </Fragment>
    );
}

export default ListPage;