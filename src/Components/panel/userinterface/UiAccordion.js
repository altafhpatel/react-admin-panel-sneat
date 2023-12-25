import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Layout from "../../Layout/Layout";

function UiAccordion() {
  return (
    <Layout>
      <div className="row">
        {/* Accordion with Arrows
        if you don't need shadow remove card class */}
        <div class="col-md mb-4 mb-md-2">
          <small class="text-light fw-medium">Basic Accordion</small>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="mt-2 card">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Dessert ice cream donut oat cake jelly-o pie sugar plum cheesecake. Bear claw dragée oat cake
                dragée ice cream halvah tootsie roll. Danish cake oat cake pie macaroon tart donut gummies.
                Jelly beans candy canes carrot cake. Fruitcake chocolate chupa chups.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mt-2 card">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing
                marzipan gummi bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping
                soufflé. Wafer gummi bears marshmallow pastry pie.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="mt-2 card">
              <Accordion.Header>Accordion Item #3</Accordion.Header>
              <Accordion.Body>
                Oat cake toffee chocolate bar jujubes. Marshmallow brownie lemon drops cheesecake. Bonbon
                gingerbread marshmallow sweet jelly beans muffin. Sweet roll bear claw candy canes oat cake
                dragée caramels. Ice cream wafer danish cookie caramels muffin.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        {/* Accordion with arrows end */}

      </div>
    </Layout>
  )

}

export default UiAccordion