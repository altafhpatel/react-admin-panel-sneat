import React from "react";
import Layout from "../Layout/Layout";

import VerticalBasic from '../panel/formlayout/VerticalBasic';
import VerticalWithIcons from '../panel/formlayout/VerticalWithIcons'


function VerticalForm() {
    return (
        <Layout>
             <h4 class="py-3 mb-4"><span class="text-muted fw-light">Forms/</span> Vertical Layouts</h4>
            <div className="row">
                
                <VerticalBasic />
                <VerticalWithIcons />
            </div>

        </Layout>
    )
}

export default VerticalForm