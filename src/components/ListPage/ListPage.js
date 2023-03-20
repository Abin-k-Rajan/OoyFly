import React, { Fragment } from 'react'
import ListCard from '../../common/Cards/ListCard';
import Searchform from '../../common/Forms/Searchform';
import UpdateSearchForm from '../../common/Forms/UpdateSearchForm';



function ListPage() {
    return (
        <Fragment>
            <UpdateSearchForm />
            <div className='bd-grid'>
                <ListCard />
                <ListCard />
            </div>
        </Fragment>
    );
}

export default ListPage;