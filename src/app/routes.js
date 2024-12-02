import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { PlayWithMe } from "../pages/game";
import { Underflight } from "../pages/about/underflight";
import { CharaAni } from "../pages/about/chara";
import { TOS } from "../pages/tos";
import { Changelogs } from "../pages/changelogs";
import { Collab } from "../pages/collab"

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
        <Route path="/game" element={<PlayWithMe />} />
        <Route path="/tos" element={<TOS />} />
        <Route path="/changelogs" element={<Changelogs />} />
        <Route path="/about/underflight" element={<Underflight />} />
        <Route path="/about/sona" element={<CharaAni />} />
        <Route path="/collab" element={<Collab />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
