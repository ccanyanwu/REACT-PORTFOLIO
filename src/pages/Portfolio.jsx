import { Section } from "./Portfolio.styled";
import { useState } from "react";
import All from "../components/All";

const Portfolio = ({ dark }) => {
  const [stack, setStack] = useState("all");

  return (
    <Section dark={dark}>
      <h1 className="text-center text-capitalize mb-5">
        A Selection Of Stuff I've Built
      </h1>

      <section>
        <div className="tab-nav d-flex flex-wrap justify-content-center justify-lg-content-start">
          <div
            onClick={() => setStack("all")}
            className={`rounded ${
              stack !== "all" ? null : dark ? "dark" : "active"
            } ${dark ? "tab-navd" : "tab-navl"}`}
            
          >
            <button className="btn btn-nav ">All</button>
          </div>

          <div
            onClick={() => setStack("react")}
            className={`rounded ${
              stack !== "react" ? null : dark ? "dark" : "active"
            } ${dark ? "tab-navd" : "tab-navl"}`}>
            <button className="btn btn-nav">React</button>
          </div>

          <div
            onClick={() => setStack("javascript")}
            className={`rounded ${
              stack !== "javascript" ? null : dark ? "dark" : "active"
            } ${dark ? "tab-navd" : "tab-navl"}`}>
            <button className="btn btn-nav">Javascript</button>
          </div>

          <div
            onClick={() => setStack("node")}
            className={`rounded ${
              stack !== "node" ? null : dark ? "dark" : "active"
            } ${dark ? "tab-navd" : "tab-navl"}`}>
            <button className="btn btn-nav">NodeJS</button>
          </div>

          <div
            onClick={() => setStack("html")}
            className={`rounded ${
              stack !== "html" ? null : dark ? "dark" : "active"
            } ${dark ? "tab-navd" : "tab-navl"}`}>
            <button className="btn btn-nav">HTML/CSS</button>
          </div>
        </div>
      </section>

      {/* featured Projects */}
      <All stack={stack}/>
    </Section>
  );
};

export default Portfolio;
