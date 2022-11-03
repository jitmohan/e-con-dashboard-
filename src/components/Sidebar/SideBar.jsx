import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
// import { Link } from "react-router-dom";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <MdDashboard />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          className={{
            // width: isOpen ? "200px" : "50px",
            width: isOpen ? "open" : "close",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className="sidebar "
        >
          <div className="top_section">
            <img src="assets/econ.svg" className="mb-01" alt="logo" />
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                ></motion.h1>
              )}
            </AnimatePresence>
          </div>
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>

          <section className="routes">
            <div className="firstpart">
              {routes.map((route, index) => {
                if (route.subRoutes) {
                  return (
                    <SidebarMenu
                      key={index}
                      setIsOpen={setIsOpen}
                      route={route}
                      showAnimation={showAnimation}
                      isOpen={isOpen}
                    />
                  );
                }

                return (
                  <NavLink
                    to={route.path}
                    key={index}
                    className="link"
                    activeClassName="active"
                  >
                    <div className="icon">{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text"
                        >
                          {route.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </NavLink>
                );
              })}
            </div>
          </section>
          <div className="search viewposition">
            <NavLink to="/support" className="link1">
              <div className="search_icon">
                <AiOutlineQuestionCircle />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.routes
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    // className="link_text "
                  >
                    Support
                  </motion.routes>
                )}
              </AnimatePresence>
            </NavLink>
          </div>
          <div className="search viewposition1">
            <div className="search_icon">
              <RiLogoutBoxLine />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.routes
                  to="/logout"
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  // className="link_text "
                >
                  Logout
                </motion.routes>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
