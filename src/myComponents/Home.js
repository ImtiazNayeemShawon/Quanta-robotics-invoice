import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-grid-system";
import "./Home.css";
import ReactToPrint from "react-to-print";
import logo from './img/logo.png';
import qr from './img/qr.png';

function Home() {
  const [value, setValue] = useState({
    description: "",
    qty: "",
    price: "",

    description1: "",
    qty1: "",
    price1: "",

    description2: "",
    qty2: "",
    price2: "",

    description3: "",
    qty3: "",
    price3: "",

    description4: "",
    qty4: "",
    price4: "",

    description5: "",
    qty5: "",
    price5: "",

    description6: "",
    qty6: "",
    price6: "",

    description7: "",
    qty7: "",
    price7: "",

    description8: "",
    qty8: "",
    price8: "",

    description9: "",
    qty9: "",
    price9: "",

    description10: "",
    qty10: "",
    price10: "",

    description11: "",
    qty11: "",
    price11: "",

    description12: "",
    qty12: "",
    price12: "",

    description13: "",
    qty13: "",
    price13: "",

    description14: "",
    qty14: "",
    price14: "",

    description15: "",
    qty15: "",
    price15: "",
  });

  const [total, setTotal] = useState("");
  const [total1, setTotal1] = useState("");
  const [total2, setTotal2] = useState("");
  const [total3, setTotal3] = useState("");
  const [total4, setTotal4] = useState("");
  const [total5, setTotal5] = useState("");
  const [total6, setTotal6] = useState("");
  const [total7, setTotal7] = useState("");
  const [total8, setTotal8] = useState("");
  const [total9, setTotal9] = useState("");
  const [total10, setTotal10] = useState("");
  const [total11, setTotal11] = useState("");
  const [total12, setTotal12] = useState("");
  const [total13, setTotal13] = useState("");
  const [total14, setTotal14] = useState("");
  const [total15, setTotal15] = useState("");

  const [subTotal, setSubTotal] = useState("");

  function handleChange(event) {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  }

  useEffect(() => {
    setTotal(value.qty * value.price);
    setTotal1(value.qty1 * value.price1);
    setTotal2(value.qty2 * value.price2);
    setTotal3(value.qty3 * value.price3);
    setTotal4(value.qty4 * value.price4);
    setTotal5(value.qty5 * value.price5);
    setTotal6(value.qty6 * value.price6);
    setTotal7(value.qty7 * value.price7);
    setTotal8(value.qty8 * value.price8);
    setTotal9(value.qty9 * value.price9);
    setTotal10(value.qty10 * value.price10);
    setTotal11(value.qty11 * value.price11);
    setTotal12(value.qty12 * value.price12);
    setTotal13(value.qty13 * value.price13);
    setTotal14(value.qty14 * value.price14);
    setTotal15(value.qty15 * value.price15);

    setSubTotal(
      parseInt(total) +
        parseInt(total1) +
        parseInt(total2) +
        parseInt(total3) +
        parseInt(total4) +
        parseInt(total5) +
        parseInt(total6) +
        parseInt(total7) +
        parseInt(total8) +
        parseInt(total9) +
        parseInt(total10) +
        parseInt(total11) +
        parseInt(total12) +
        parseInt(total13) +
        parseInt(total14) +
        parseInt(total15)
    );
  });

  let componentRef = useRef();

  return (
    <div style={{ alignItems: "center" }}>
      <div className="main" ref={(el) => (componentRef = el)}>
        <div className="header">
        <div id="Bill-head">
            <h2>Invoice/bill</h2>
          </div>
          <img className="logo" src={logo}/>
      <div className="Up-section"> 
          <div className="Adress">
            <p>
              <i className="fa fa-globe" style={{ color: "green" }}></i> 75/a
              Monohorpur, Cumilla,
            </p>
            <p>Dhanmondi Dhaka-1205.</p>
            <p>
              <i className="fa fa-envelope" style={{ color: "green" }}></i>{" "}
              Email: quantaroboticslab@gmail.com
            </p>
            <p>
              <i className="fa fa-phone" style={{ color: "green" }}></i> Phone:
              01777401908, 01874280811
            </p>
         </div>
         <div className="qr">
            <img className="qr" src={qr}/>
         </div>
      </div>
          <Container>
            <Row>
              <Col md={8}>
                <p style={{ textTransform: "uppercase" }}>
                  invoice/bill to: <input id="bill-to" type="text" />{" "}
                </p>
              </Col>

              <Col md={4}>
                <p style={{ textTransform: "uppercase" }}>
                  invoice no:
                  <input id="invoice-no" type="number" />
                </p>
                <p style={{ textTransform: "uppercase" }}>
                  date:
                  <input id="Date" type="number" />
                </p>
              </Col>
            </Row>
          </Container>

          <div className="head-Column">
            <p>Description</p>
            <p id="qt">Qty</p>
            <p>Unit Price</p>
            <p>Total</p>
          </div>
        </div>

        <div className="column-1">
          <span>01</span>
          <input
            id="description"
            name="description"
            type="text"
            onChange={handleChange}
          />
          <input id="qty" name="qty" type="number" onChange={handleChange} />
          <input
            id="price"
            name="price"
            type="number"
            onChange={handleChange}
          />
          <input id="total" name="total" value={total} type="number" disabled />
        </div>

        <div className="column-2">
          <span>02</span>
          <input
            id="description"
            name="description1"
            type="text"
            onChange={handleChange}
          />
          <input id="qty" name="qty1" type="number" onChange={handleChange} />
          <input
            id="price"
            name="price1"
            type="number"
            onChange={handleChange}
          />
          <input
            id="total"
            name="total1"
            value={total1}
            type="number"
            disabled
          />
        </div>

        <div className="column-3">
          <span>03</span>
          <input
            id="description"
            name="description2"
            type="text"
            onChange={handleChange}
          />
          <input id="qty" name="qty2" type="number" onChange={handleChange} />
          <input
            id="price"
            name="price2"
            type="number"
            onChange={handleChange}
          />
          <input
            id="total"
            name="total2"
            value={total2}
            type="number"
            disabled
          />
        </div>

        <div className="column-4">
          <span>04</span>
          <input
            id="description"
            name="description3"
            type="text"
            onChange={handleChange}
          />
          <input id="qty" name="qty3" type="number" onChange={handleChange} />
          <input
            id="price"
            name="price3"
            type="number"
            onChange={handleChange}
          />
          <input
            id="total"
            name="total3"
            value={total3}
            type="number"
            disabled
          />
        </div>

        <div className="column-5">
          <span>05</span>
          <input
            id="description"
            name="description4"
            type="text"
            onChange={handleChange}
          />
          <input id="qty" name="qty4" type="number" onChange={handleChange} />
          <input
            id="price"
            name="price4"
            type="number"
            onChange={handleChange}
          />
          <input
            id="total"
            name="total4"
            value={total4}
            type="number"
            disabled
          />
        </div>

        <div className="column-6">
          <span>06</span>
          <input
            id="description"
            name="description5"
            type="text"
            onChange={handleChange}
          />
          <input id="qty" name="qty5" type="number" onChange={handleChange} />
          <input
            id="price"
            name="price5"
            type="number"
            onChange={handleChange}
          />
          <input
            id="total"
            name="total5"
            value={total5}
            type="number"
            disabled
          />
        </div>

        <div className="column-7">
          <span>07</span>
          <input
            id="description"
            name="description6"
            type="text"
            onChange={handleChange}
          />
          <input id="qty" name="qty6" type="number" onChange={handleChange} />
          <input
            id="price"
            name="price6"
            type="number"
            onChange={handleChange}
          />
          <input
            id="total"
            name="total6"
            value={total6}
            type="number"
            disabled
          />
        </div>

        <div className="column-8">
          <span>08</span>
          <input
            id="description"
            name="description7"
            type="text"
            onChange={handleChange}
          />
          <input id="qty" name="qty7" type="number" onChange={handleChange} />
          <input
            id="price"
            name="price7"
            type="number"
            onChange={handleChange}
          />
          <input
            id="total"
            name="total7"
            value={total7}
            type="number"
            disabled
          />
        </div>

        <div className="column-9">
          <span>09</span>
          <input
            id="description"
            name="description8"
            type="text"
            onChange={handleChange}
          />
          <input id="qty" name="qty8" type="number" onChange={handleChange} />
          <input
            id="price"
            name="price8"
            type="number"
            onChange={handleChange}
          />
          <input
            id="total"
            name="total8"
            value={total8}
            type="number"
            disabled
          />
        </div>

        <div className="column-10">
          <span>10</span>
          <input
            id="description"
            name="description9"
            type="text"
            onChange={handleChange}
          />
          <input id="qty" name="qty9" type="number" onChange={handleChange} />
          <input
            id="price"
            name="price9"
            type="number"
            onChange={handleChange}
          />
          <input
            id="total"
            name="total9"
            value={total9}
            type="number"
            disabled
          />
        </div>

        <div className="column-11">
          <span>11</span>
          <input
            id="description"
            name="description10"
            type="text"
            onChange={handleChange}
          />
          <input id="qty" name="qty10" type="number" onChange={handleChange} />
          <input
            id="price"
            name="price10"
            type="number"
            onChange={handleChange}
          />
          <input
            id="total"
            name="total10"
            value={total10}
            type="number"
            disabled
          />
        </div>

        <div className="column-12">
          <span>12</span>
          <input
            id="description"
            name="description11"
            type="text"
            onChange={handleChange}
          />
          <input id="qty" name="qty11" type="number" onChange={handleChange} />
          <input
            id="price"
            name="price11"
            type="number"
            onChange={handleChange}
          />
          <input
            id="total"
            name="total11"
            value={total11}
            type="number"
            disabled
          />
        </div>

        <div className="column-13">
          <span>13</span>
          <input
            id="description"
            name="description12"
            type="text"
            onChange={handleChange}
          />
          <input id="qty" name="qty12" type="number" onChange={handleChange} />
          <input
            id="price"
            name="price12"
            type="number"
            onChange={handleChange}
          />
          <input
            id="total"
            name="total12"
            value={total12}
            type="number"
            disabled
          />
        </div>

        <div className="column-14">
          <span>14</span>
          <input
            id="description"
            name="description13"
            type="text"
            onChange={handleChange}
          />
          <input id="qty" name="qty13" type="number" onChange={handleChange} />
          <input
            id="price"
            name="price13"
            type="number"
            onChange={handleChange}
          />
          <input
            id="total"
            name="total13"
            value={total13}
            type="number"
            disabled
          />
        </div>

        <div className="column-15">
          <span>15</span>
          <input
            id="description"
            name="description14"
            type="text"
            onChange={handleChange}
          />
          <input id="qty" name="qty14" type="number" onChange={handleChange} />
          <input
            id="price"
            name="price14"
            type="number"
            onChange={handleChange}
          />
          <input
            id="total"
            name="total14"
            value={total14}
            type="number"
            disabled
          />
        </div>

        <div className="column-16">
          <span>16</span>
          <input
            id="description"
            name="description15"
            type="text"
            onChange={handleChange}
          />
          <input id="qty" name="qty15" type="number" onChange={handleChange} />
          <input
            id="price"
            name="price15"
            type="number"
            onChange={handleChange}
          />
          <input
            id="total"
            name="total15"
            value={total15}
            type="number"
            disabled
          />
        </div>

        <div className="footer">
          <Container>
            <Row>
              <Col md={8}>
                <p>Notes:</p>
                <p>#The above mentioned goods are in order & condition.</p>
                <p>
                  #Goods sold are not returnable, exchangeable or refundable.
                </p>
                <p>Payment Method:</p>
                <p style={{ textTransform: "uppercase" }}>
                  bank/mobile banking/cash
                </p>
              </Col>

              <Col id="total" md={2}>
                <input
                  name="subTotal"
                  value={subTotal}
                  type="number"
                  disabled
                />
                <h6 style={{ textTransform: "uppercase" }}>
                  thank you for purchase
                </h6>
              </Col>
            </Row>
            <p style={{ textAlign: "center" }}>
              Software developed by Softulas, Call Us: 01316735962
            </p>
          </Container>
        </div>
      </div>

      <ReactToPrint
        trigger={() => <button className="printBtn">Print this out!</button>}
        content={() => componentRef}
      />
    </div>
  );
}

export default Home;
