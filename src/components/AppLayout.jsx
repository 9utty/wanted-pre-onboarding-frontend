import { Bar, Button, MenuList, MenuListItem, Toolbar } from "react95";
import PropTypes from "prop-types";

import styled, { ThemeProvider } from "styled-components";
import React, { useState } from "react";
import original from "react95/dist/themes/original";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.desktopBackground};
  font-size: "1.5rem";
`;

const AppLayout = ({ Children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#008080",
        width: "100vw",
        height: "100vh",
      }}
    >
      <ThemeProvider theme={original}>
        <Wrapper>
          <div style={{ height: "60px" }}>
            <Bar
              style={{
                width: "100vw",
                height: "100%",
                paddingTop: "3px",
              }}
            >
              <Toolbar style={{ justifyContent: "space-between" }}>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <Button
                    onClick={() => setOpen(!open)}
                    active={open}
                    style={{
                      fontWeight: "bold",
                      fontFamily: "dunggeunmo-bold",
                      height: "40px",
                      width: "120px",
                      fontSize: "25px",
                      marginBottom: "20px",
                    }}
                  >
                    <img
                      src={
                        "https://user-images.githubusercontent.com/86397600/236210202-560b7128-fa5a-4fdd-b746-f3c304c977bd.png"
                      }
                      style={{
                        paddingRight: "5px",
                        height: "30px",
                      }}
                      alt={"startIcon"}
                    />
                    Start
                  </Button>
                  {open && (
                    <MenuList
                      style={{
                        position: "absolute",
                        left: "-6px",
                        top: "32px",
                        width: "30vw",
                        zIndex: "100",
                      }}
                      onClick={() => setOpen(false)}
                    >
                      <MenuListItem
                        onClick={() =>
                          (window.location.href =
                            "https://github.com/9utty/wanted-pre-onboarding-frontend")
                        }
                      >
                        <span role="img" aria-label="📁">
                          📁
                        </span>
                        <div
                          style={{
                            fontFamily: "dunggeunmo-bold",
                          }}
                        >
                          GitHub?
                        </div>
                      </MenuListItem>
                    </MenuList>
                  )}
                </div>
              </Toolbar>
            </Bar>
            {Children}
          </div>
        </Wrapper>
      </ThemeProvider>
    </div>
  );
};

export default AppLayout;

AppLayout.propTypes = {
  Children: PropTypes.element,
};
