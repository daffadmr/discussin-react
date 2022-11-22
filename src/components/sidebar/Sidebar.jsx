import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PersonOutline,
  ForumOutlined,
  HistoryEduOutlined,
  TopicOutlined,
} from "@mui/icons-material";
import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sideWrapper">
          <div className="sidebarMenu">
            <h3>Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/" className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3>Menu</h3>
            <ul className="sidebarList">
              <Link to="/users" className="sidebarListItem ">
                <PersonOutline className="sidebarIcon" />
                Users
              </Link>
              <Link to="/posts" className="sidebarListItem">
                <HistoryEduOutlined className="sidebarIcon" />
                Postingan
              </Link>
              <Link to="/posts" className="sidebarListItem">
                <TopicOutlined className="sidebarIcon" />
                Topic
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3>Notifikasi</h3>
            <ul className="sidebarList">
              <Link className="sidebarListItem ">
                <MailOutline className="sidebarIcon" />
                E-Mail
              </Link>
              <Link className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                Feedback
              </Link>
              <Link className="sidebarListItem">
                <ChatBubbleOutline className="sidebarIcon" />
                Pesan
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
