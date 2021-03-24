import React from "react";
import About from '../About';
import Projects from '../Projects';
import Skills from "../Skills";
import Contact from "../Contact";

const components = {
  AboutPage:About,
  ProjectsPage: Projects,
  SkillsPage: Skills,
  ContactPage: Contact
};

//Use this eventually to dynamically display the selected component/page
function SelectedPage(props) {
  const SelectPage = components[props.currentPage];
  return <SelectPage />;
}

export default SelectedPage;