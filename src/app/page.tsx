"use client";

import { Button } from "../components/buttons";
import Link from "next/link";
import HeaderBanner from "../components/headers";
import { Card } from "../components/cards";

export default function Page() {
  return (
    <div style={{ padding: "0px" }}>
      <h1>Wema Stores</h1>
      {/* <Button label="Click Me" onClick={() => alert("Button clicked!")} /> */}
      {/* <div
        style={{
          display: "flex",
          margin: "20px",
          justifyContent: "space-between",
        }}
      >
        <Card
          link="#"
          linkText="QUICK LOOK"
          topLeftText="NEW"
          topRightText="-19%"
          imageSrc="/assets/product.jpg"
          productTitle="WALL CLOCK"
          price="110"
          rate={""}
        />
        <Card
          link="#"
          linkText="QUICK LOOK"
          topLeftText="NEW"
          imageSrc="/assets/product.jpg"
          productTitle="WALL CLOCK"
          price="110"
          rate={""}
        />
        <Card
          link="#"
          linkText="QUICK LOOK"
          topRightText="-19%"
          imageSrc="/assets/product.jpg"
          productTitle="WALL CLOCK"
          price="110"
          rate={""}
        />
      </div> */}
      {/* <div>
        <HeaderBanner
          backgroundImage="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/about-title-img1.jpg"
          type={"fullWidthNoImage"}
          title={"ABOUT"}
          subtitle={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. "
          }
        />
      </div> */}
    </div>
  );
}
