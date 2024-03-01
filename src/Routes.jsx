import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Toolspage from "pages/Toolspage";
import GoalCalculator from "pages/GoalCalculator";
import LoanEMICalculator from "pages/LoanEMICalculator";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "toolspage",
      element: <Toolspage />,
    },
    {
      path: "goalcalculator",
      element: <GoalCalculator />,
    },
    {
      path: "loanemicalculator",
      element: <LoanEMICalculator />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
