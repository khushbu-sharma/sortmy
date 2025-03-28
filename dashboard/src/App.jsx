import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ActivityLogs from "./components/ActivityLogs/ActivityLogs"; // ✅ Import ActivityLogs
import FolderDetails from "./components/AdminDashboard/FolderDetails";
import AuthForm from "./components/AuthForm";
import Doc from "./components/Doc";
import DocumentLogs from "./components/DocumentLogs/DocumentLogs";
import EditorFolderDetails from "./components/EditorDashboard/EditorFolderDetails";
import MembersList from "./components/MembersList";
import Notifications from "./components/Notification";
import RoleBasedUI from "./components/RoleBasedUI";
import UploadForm from "./components/UploadForm";
import Version from "./components/version"; // ✅ Import Version
import ViewerFolderDetails from "./components/ViewerDashboard/ViewerFolderDetails"; // ✅ Import ViewerFolderDetails
import "./index.css";
import Dashboard from "./pages/Dashboard";
import EditorDashboard from "./pages/EditorDashboard";
import ViewerDashboard from "./pages/ViewerDashboard";

const App = () => {
  const [members, setMembers] = useState([]); // Centralized members state

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/editordashboard/*" element={<EditorDashboard />} />
        <Route path="/viewerdashboard/*" element={<ViewerDashboard />} />
        <Route path="/upload" element={<UploadForm />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/dashboard/:folderName" element={<FolderDetails />} />
        <Route
          path="/editordashboard/:folderName"
          element={<EditorFolderDetails />}
        />
        <Route
          path="/viewerdashboard/:folderName"
          element={<ViewerFolderDetails />}
        />

        <Route path="/activity-logs" element={<ActivityLogs />} />
        <Route path="/document-logs" element={<DocumentLogs />} />
        <Route path="/doc" element={<Doc />} />
        <Route path="/version" element={<Version />} />

        <Route
          path="/add-user"
          element={<RoleBasedUI members={members} setMembers={setMembers} />}
        />
        <Route
          path="/members-list"
          element={<MembersList members={members} setMembers={setMembers} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
