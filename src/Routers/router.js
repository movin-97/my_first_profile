import HomeComp from "../Pages/Home/HomeComp";
import Page404found from "./../Pages/Page404/Page404found";
import ServiceComp from "../Pages/Service/ServiceComp";
import SkillsComp from '../Pages/Skills/SkillsComp';
import ContactComp from "../Pages/Contact/ContactComp";

const router = [
  {
    path: "*",
    component: <Page404found />,
  },
  {
    path: "/",
    component: <HomeComp />,
  },
  {
    path: "/skills",
    component: <SkillsComp />,
  },
  {
    path: "/service",
    component: <ServiceComp />,
  },
  {
    path: "/contact",
    component: <ContactComp />,
  },
];

export default router;
