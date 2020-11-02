import React from "react";
import Job from "./Job";

const Jobs = () => {
  return (
    <>
      <main>
        <Job
          className="job-red"
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
        <Job
          className="job-green"
          title="Agent de Sécurité - Pantin"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
        <Job
          className="job-yellow"
          title="Responsable d'Atelier (H/F)"
          contractType="CDI"
          country="France"
          city="Paris"
        />
        <Job
          className="job-lightBlue"
          title="Chef de Projets"
          contractType="CDD"
          country="France"
          city="Paris"
        />
        <Job
          className="job-beige"
          title="Développeur React.js"
          contractType="CDI"
          country="France"
          city="Paris"
        />
        <Job
          className="job-red"
          title="Sales Associate Stockholm"
          contractType="CDI"
          country="Suède"
          city="Stockholm"
        />
        <Job
          className="job-green"
          title="Vendeur/se - Crans Montana"
          contractType="CDI"
          country="Suisse"
          city="Crans-Montana"
        />
        <Job
          className="job-yellow"
          title="CRM & Data Quality Analyst"
          contractType="CDI"
          country="USA"
          city="New York"
        />
        <Job
          className="job-lightBlue"
          title="Infirmier (H/F)"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
      </main>
    </>
  );
};

export default Jobs;