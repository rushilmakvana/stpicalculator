import React, { useState } from "react";
import "./stpi.css";
const Stpi = () => {
  let [java, ujava] = useState();
  let [ens, uens] = useState();
  let [icn, uicn] = useState();
  let [net, unet] = useState();
  let [ajava, uajava] = useState();
  let [wns, uwns] = useState();
  let [aad, uaad] = useState();
  let [php, uphp] = useState();
  let [stpi, ustpi] = useState(0);
  let data = (val, func) => {
    val = val.toUpperCase();
    console.log(val);
    if (val == "AA")
      //  || val == "Aa" || val == "aa" || val == "aA")
      func(10);
    else if (val == "AB")
      //  || val == "Ab" || val == "ab" || val == "aB")
      func(9);
    else if (val == "BB")
      //  || val == "Bb" || val == "bb" || val == "bB")
      func(8);
    else if (val == "BC")
      //  || val == "Bc" || val == "bc" || val == "bC")
      func(7);
    else if (val == "CC")
      //  || val == "Cc" || val == "cc" || val == "cC")
      func(6);
    else if (val == "CD")
      //  || val == "Cd" || val == "cd" || val == "cD")
      func(5);
    else if (val == "DD")
      //  || val == "Dd" || val == "dd" || val == "dD")
      func(4);

    // switch (val) {
    //   case "AA":
    //     // || "Aa" || "aa" || "aA":
    //     ujava(10);
    //     break;
    //   case "AB":
    //     //  || "Ab" || "ab" || "aB":
    //     func(9);
    //     break;
    //   case "BB":
    //     //  || "Bb" || "bb" || "bB":
    //     func(8);
    //     break;
    //   case "BC":
    //     // || "Bc" || "bc" || "bC":
    //     func(7);
    //     break;
    //   case "CC":
    //     //  || "Cc" || "cc" || "cC":
    //     func(6);
    //     break;
    //   case "CD":
    //     // || "Cd" || "cd" || "cD":
    //     func(5);
    //     break;
    //   case "DD":
    //     //  || "Dd" || "dd" || "dD":
    //     func(4);
    //     break;
    //   default:
    //     break;
    // }
  };
  let calculate = () => {
    // console.log(java);
    let sem5 = (java * 7 + ens * 7 + net * 7 + icn * 7) / 28;
    let sem6 = (wns * 6 + ajava * 7 + aad * 7 + php * 7) / 27;
    console.log("stpi", sem5 + sem6);
    ustpi(sem5 + sem6);
  };
  return (
    <>
      {/* <form action=""> */}
      <div className="main">
        <div className="title-main">
          <h1>STPI CALCULATOR</h1>
        </div>

        <div className="box">
          <div className="title">
            <h3>Enter 5th semester Theory ESE grades</h3>
          </div>
          <div className="inputs">
            <label htmlFor="java">JAVA :</label>
            <input
              type="text"
              className="in"
              onChange={(e) => {
                data(e.target.value, ujava);
                // console.log(java);
              }}
              // value={java}
              name="java"
              id=""
            />
          </div>

          <div className="inputs">
            <label htmlFor="java">ICN : &nbsp;</label>
            <input
              type="text"
              className="in"
              onChange={(e) => {
                data(e.target.value, uicn);
                // console.log(icn);
              }}
              // value={icn}
              name="icn"
              id=""
            />
          </div>
          <div className="inputs">
            <label htmlFor="java">ENS : &nbsp;</label>
            <input
              type="text"
              onChange={(e) => {
                data(e.target.value, uens);
                console.log(ens);
              }}
              // value={ens}
              className="in"
              name="ens"
              id=""
            />
          </div>
          <div className="inputs">
            <label htmlFor="java">NET : &nbsp;</label>
            <input
              type="text"
              onChange={(e) => {
                data(e.target.value, unet);
                // console.log(net);
              }}
              // value={net}
              className="in"
              name="net"
              id=""
            />
          </div>
        </div>
        <div className="box">
          <div className="title">
            <h3>Enter 6th semester Theory ESE grades</h3>
          </div>
          <div className="inputs">
            <label htmlFor="java">AJAVA :</label>
            <input
              type="text"
              onChange={(e) => {
                data(e.target.value, uajava);
                // console.log(ajava);
              }}
              // value={ajava}
              className="in"
              name="ajp"
              id=""
            />
          </div>
          <div className="inputs">
            <label htmlFor="java">WNS : &nbsp;</label>
            <input
              type="text"
              onChange={(e) => {
                data(e.target.value, uwns);
                // console.log(wns);
              }}
              // value={wns}
              className="in"
              name="wns"
              id=""
            />
          </div>
          <div className="inputs">
            <label htmlFor="java">PHP : &nbsp;</label>
            <input
              type="text"
              onChange={(e) => {
                data(e.target.value, uphp);
                // console.log(php);
              }}
              // value={php}
              className="in"
              name="php"
              id=""
            />
          </div>
          <div className="inputs">
            <label htmlFor="java">AAD : &nbsp;</label>
            <input
              type="text"
              onChange={(e) => {
                data(e.target.value, uaad);
                // console.log(aad);
              }}
              // value={aad}
              className="in"
              name="aad"
              id=""
            />
          </div>
        </div>
        <h2 style={{ marginBottom: "1rem" }}> STPI : : {stpi} </h2>
        <div className="btns">
          <input type="submit" className="btn" onClick={calculate} />
          {/* <input className="btn" type="reset" /> */}
        </div>
      </div>
      {/* </form> */}
    </>
  );
};

export default Stpi;
