import React from "react";
import useSWR from "swr";
// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavLink,
} from "reactstrap";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const url = "/api/notifications";


function Notifications(props){
    const { data, error } = useSWR(url, fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  nav
                >
                  <div className="notification d-none d-lg-block d-xl-block" />
                  <i className="tim-icons icon-sound-wave" />
                  <p className="d-lg-none">Notifications</p>
                </DropdownToggle>
                <DropdownMenu className="dropdown-navbar" right tag="ul">
                  {/* <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      Your house reflectance update.
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      You will save a lot than expected.
                    </DropdownItem>
                  </NavLink> */}
                    {/* {data.map((notification) => ( */}
                        <NavLink tag="li">
                            <DropdownItem className="nav-item">
                                Example Notification from Server / Admin 
                            </DropdownItem>
                        </NavLink>
                    {/* ))} */}
                </DropdownMenu>
              </UncontrolledDropdown>
    )
}

export default Notifications;