import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  WorkOutline,
  Report,
  MailOutline,
  MailOutlined,
  MessageOutlined,
  Feedback,
  FeedbackOutlined,
  FeedbackTwoTone,
  FeedbackSharp,
  ReportSharp,
  GraphicEq,
  Money,
  Storefront,
  PermIdentity,
} from "@material-ui/icons";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Dashboard</h3>
          <ul className="sidebarList active">
            <Link to='/' className='link'>
              <li className="sidebarListItem ">
                <LineStyle className="sidebarIcon" /> Home
              </li>
            </Link>

            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" /> Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Quick Menu</h3>
          <ul className="sidebarList active">
            <Link to="/users" className="link">
              <li className="sidebarListItem ">
                <PermIdentity className="sidebarIcon" /> Users
              </li>
            </Link>

            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" /> Products
              </li>
            </Link>

            <li className="sidebarListItem">
              <Money className="sidebarIcon" /> Transactions
            </li>
            <li className="sidebarListItem">
              <GraphicEq className="sidebarIcon" /> Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Notifications</h3>
          <ul className="sidebarList active">
            <li className="sidebarListItem ">
              <MailOutlined className="sidebarIcon" /> Mail
            </li>
            <li className="sidebarListItem">
              <FeedbackSharp className="sidebarIcon" /> Feedback
            </li>
            <li className="sidebarListItem">
              <MessageOutlined className="sidebarIcon" /> Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Staff</h3>
          <ul className="sidebarList active">
            <li className="sidebarListItem ">
              <WorkOutline className="sidebarIcon" /> Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" /> Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
