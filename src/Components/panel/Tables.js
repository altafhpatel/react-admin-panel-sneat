import React from "react";

import BasicTable from './tables/BasicTable';
import DarkTable from './tables/DarkTable';
import DarkTableHead from './tables/DarkTableHead';
import LightHeadTable from './tables/LightHeadTable';
import HeaderFooterTable from './tables/HeaderFooterTable';
import StripedRowTable from './tables/StripedRowTable';
import BorderedTable from './tables/BorderedTable';
import BorderlessTable from './tables/BorderlessTable';
import HoverableRowTable from './tables/HoverableRowTable';
import SmallTable from './tables/SmallTable';
import ContextualClassTable from './tables/ContextualClassTable';
import NoCardTable from './tables/NoCardTable';
import ResponsiveTable from './tables/ResponsiveTable';
import Layout from "../Layout/Layout";


function Tables() {
    return (

        <Layout>
            <BasicTable />
            <hr />
            <DarkTable />
            <hr />
            <DarkTableHead />
            <hr />
            <LightHeadTable />
            <hr />
            <HeaderFooterTable />
            <hr />
            <StripedRowTable />
            <hr />
            <BorderedTable />
            <hr />
            <BorderlessTable />
            <hr />
            <HoverableRowTable />
            <hr />
            <SmallTable />
            <hr />
            <ContextualClassTable />
            <hr />
            <NoCardTable />
            <hr />
            <ResponsiveTable />
            <hr />
        </Layout>
    )
}

export default Tables;