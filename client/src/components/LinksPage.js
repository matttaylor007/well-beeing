import React from "react";
import "./Resources.css";

const links = [
  { title: "depression.org", url: "https://www.depression.org.nz" },
  { title: "Mental Heath Foundation", url: "https://mentalhealth.org.nz" },
  { title: "Hearts and Minds", url: "https://www.heartsandminds.org.nz" },
  { title: "Wellbeing NZ", url: "https://www.wellbeingsupport.health.nz" },
  { title: "Youthline", url: "https://www.youthline.co.nz" },
  { title: "Anxiety New Zealand", url: "https://www.anxiety.org.nz" },
  { title: "Changing Minds", url: "https://www.changingminds.org.nz " },
  {
    title: "Rocking Mental Health",
    url: "https://www.rockingmentalhealth.com",
  },
  { title: "The Ice House", url: "https://www.theicehouse.co.nz" },
];
const LinksPage = () => {
  return (
    <div className="resources-container">
      <div className="box-links">
        <h1>Links to resources and other sites</h1>

        <ul className="list-links">
          {links.map((link, index) => (
            <li className="link-resource" key={index}>
              <a
                className="link"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LinksPage;
