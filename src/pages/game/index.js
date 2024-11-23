import React, { useEffect }from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";
import ClipboardJS from "clipboard";

import Popup from "reactjs-popup";
import { isMobile } from 'react-device-detect'
import './index.css';

import styled from 'styled-components';

import { HiOutlineInformationCircle } from "react-icons/hi2";

export const PlayWithMe = () => {

  const yuanshen = () => { 
    if (isMobile) {
      window.location.href = 'genshin://';
    } else {
      window.location.href = 'hyp-global://launchgame?gamebiz=hk4e_global'
    }
  };
  const yuanshenvn = () => { window.location.href = 'genshinvn://'; };

  const StarRail = () => {
    if (isMobile) {
      window.location.href = 'honkaistarrail://';
    } else {
      window.location.href = 'hyp-global://launchgame?gamebiz=hkrpg_global';
    }
  };

  const StarRailVN =  () => { window.location.href = 'honkaistarrailvn://'; };

  const Zenless = () => {
    if (isMobile) {
      window.location.href = 'zenlessglobal://';
    } else {
      window.location.href = 'hyp-global://launchgame?gamebiz=nap_global';
    }
  };

  const ZenlessVN =  () => { window.location.href = 'zenlessvn://'; };

  const BH3SEA = () => {
    if (isMobile) {
      window.location.href = 'bh3oversea://';
    } else {
      window.location.href = 'hyp-global://launchgame?gamebiz=bh3_global';
    }
  };

  const BH3VN =  () => { window.location.href = 'bh3overseavn://'; };

  useEffect(() => {
    const clipboard = new ClipboardJS('.uids');

    clipboard.on('success', function(e) {
      console.log('Text copied:', e.text);
      e.clearSelection();
    });

    clipboard.on('error', function(e) {
      console.log('Error copying text:', e);
    });

    return () => {
      clipboard.destroy();
    };
  }, []);
  
  const SmallTextContainer = styled.div`
  font-size: 12px;
`;

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Play with Me | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Play with Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
        <script src="dist/clipboard.min.js"></script>
          <Col lg="5" className="mb-5">
            <p>Click on the UIDs to Copy. Click "Open Game" to launch to the game.</p>
            <p>Note: The Game or corresponding launcher must be install for the button to work. </p>
              <SmallTextContainer>
                <HiOutlineInformationCircle />
                <span> Google Play PC, Epic Games and China Regions are not supported. Wuthering Waves not supported</span>
              </SmallTextContainer>
            <p></p>
            <p>For Sky: Children of the Light, join the <a href="https://discord.gg/v7eJmvQVgw">Discord</a> server if you want to friend me in Sky.</p>
            <uids>
              <strong>Genshin:</strong>{" "}
              <a href="game" class="uids" onClick={(e) => e.preventDefault()} data-clipboard-text="880970807">880970807</a>
              <span> - Asia </span>
              <Popup trigger=
                {<button> Open Game </button>}
                position="top center">
                <div>Choose Region</div>
                <button onClick={yuanshen}>Global</button>
                <button onClick={yuanshenvn}>Vietnam - Funtap</button>
              </Popup>
              <br />
              <br />
              <strong>Star Rail:</strong>{" "}
              <a href="game" class="uids" onClick={(e) => e.preventDefault()} data-clipboard-text="800232683">800232683</a>
              <span> - Asia </span>
              <Popup trigger=
                {<button> Open Game </button>}
                position="top center">
                <div>Choose Region</div>
                <button onClick={StarRail}>Global</button>
                <button onClick={StarRailVN}>Vietnam - 9T Online</button>
              </Popup>
              <br />
              <br />
              <strong>Zenless:</strong>{" "}
              <a href="game" class="uids" onClick={(e) => e.preventDefault()} data-clipboard-text="1300431899">1300431899</a>
              <span> - Asia </span>
              <Popup trigger=
                {<button> Open Game </button>}
                position="top center">
                <div>Choose Region</div>
                <button onClick={Zenless}>Global</button>
                <button onClick={ZenlessVN}>Vietnam - Gamota</button>
              </Popup>
              <br />
              <br />
              <strong>HI3rd:</strong>{" "}
              <a href="game" class="uids" onClick={(e) => e.preventDefault()} data-clipboard-text="23825298">23825298</a>
              <span> - Asia </span>
              <Popup trigger=
                {<button> Open Game </button>}
                position="top center">
                <div>Choose Region</div>
                <button onClick={BH3SEA}>Global</button>
                <button onClick={BH3VN}>Vietnam - Funtap</button>
              </Popup>
              <br />
              <br />
              <strong>Wuthering Waves:</strong>{" "}
              <a href="game" class="uids" onClick={(e) => e.preventDefault()} data-clipboard-text="901306307">901306307</a>
              <span> - SEA </span>
            </uids>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
