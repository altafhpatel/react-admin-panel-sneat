import React from "react";
import Layout from "../Layout/Layout";

import HorizontalBasic from '../panel/formlayout/HorizontalBasic';
import HorizontalWithIcons from '../panel/formlayout/HorizontalWithIcons'


function HorizontalForm() {
    return (
        <Layout>
             <h4 class="py-3 mb-4"><span class="text-muted fw-light">Forms/</span> Horizontal Layouts</h4>
            <div className="row">
                
                <HorizontalBasic />
                <HorizontalWithIcons />
            </div>

        </Layout>
    )
}

export default HorizontalForm;