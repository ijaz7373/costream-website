import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";

import Scada from "./pages/technology/Scada";
import Monitoring from "./pages/technology/scada/Monitoring";
import Control from "./pages/technology/scada/Control";
import AlertsNotifications from "./pages/technology/scada/AlertsNotifications";
import Visualizations from "./pages/technology/scada/Visualizations";
import EventTracking from "./pages/technology/scada/EventTracking";
import TrendsAnalytics from "./pages/technology/scada/TrendsAnalytics";
import Reporting from "./pages/technology/scada/Reporting";

import BeyondScada from "./pages/technology/BeyondScada";
import MaintenanceTracking from "./pages/technology/beyondScada/MaintenanceTracking";
import AssetManagement from "./pages/technology/beyondScada/AssetManagement";
import Tasks from "./pages/technology/beyondScada/Tasks";
import PhotoVideoIntegration from "./pages/technology/beyondScada/PhotoVideoIntegration";
import KnowledgeManagement from "./pages/technology/beyondScada/KnowledgeManagement";
import FileManagement from "./pages/technology/beyondScada/FileManagement";

import Ecosystem from "./pages/technology/Ecosystem";

import Cybersecurity from "./pages/cybersecurity/Cybersecurity";
import SecureByDesign from "./pages/cybersecurity/SecureByDesign";
import SecureFromDayOne from "./pages/cybersecurity/SecureFromDayOne";
import SecureForTheLongRun from "./pages/cybersecurity/SecureForTheLongRun";

import MunicipalWater from "./pages/industries/MunicipalWater";
import MunicipalWastewater from "./pages/industries/MunicipalWastewater";
import IndustrialWastewater from "./pages/industries/IndustrialWastewater";
import WasteManagement from "./pages/industries/WasteManagement";
import OilGasEnergy from "./pages/industries/OilGasEnergy";

import Services from "./pages/services/Services";
import OngoingUnlimitedSupport from "./pages/services/OngoingUnlimitedSupport";
import ProjectManagement from "./pages/services/ProjectManagement";
import ProcessOptimization from "./pages/services/ProcessOptimization";
import SystemsEngineering from "./pages/services/SystemsEngineering";
import CustomizedSolutions from "./pages/services/CustomizedSolutions";
import Analytics from "./pages/services/Analytics";

import ContactUs from "./pages/about/ContactUs";
import HistoryValuesCulturePeopleLeadership from "./pages/about/HistoryValuesCulturePeopleLeadership";
import News from "./pages/about/News";
import BlogSocialMedia from "./pages/about/BlogSocialMedia";
import Events from "./pages/about/Events";

import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/technology/scada" element={<Scada />} />
        <Route path="/technology/scada/monitoring" element={<Monitoring />} />
        <Route path="/technology/scada/control" element={<Control />} />
        <Route
          path="/technology/scada/alerts-notifications"
          element={<AlertsNotifications />}
        />
        <Route
          path="/technology/scada/visualizations"
          element={<Visualizations />}
        />
        <Route
          path="/technology/scada/event-tracking"
          element={<EventTracking />}
        />
        <Route
          path="/technology/scada/trends-analytics"
          element={<TrendsAnalytics />}
        />
        <Route path="/technology/scada/reporting" element={<Reporting />} />

        <Route path="/technology/beyond-scada" element={<BeyondScada />} />
        <Route
          path="/technology/beyond-scada/maintenance-tracking"
          element={<MaintenanceTracking />}
        />
        <Route
          path="/technology/beyond-scada/asset-management"
          element={<AssetManagement />}
        />
        <Route path="/technology/beyond-scada/tasks" element={<Tasks />} />
        <Route
          path="/technology/beyond-scada/photo-video-integration"
          element={<PhotoVideoIntegration />}
        />
        <Route
          path="/technology/beyond-scada/knowledge-management"
          element={<KnowledgeManagement />}
        />
        <Route
          path="/technology/beyond-scada/file-management"
          element={<FileManagement />}
        />

        <Route path="/technology/ecosystem" element={<Ecosystem />} />

        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route
          path="/cybersecurity/secure-by-design"
          element={<SecureByDesign />}
        />
        <Route
          path="/cybersecurity/secure-from-day-one"
          element={<SecureFromDayOne />}
        />
        <Route
          path="/cybersecurity/secure-for-the-long-run"
          element={<SecureForTheLongRun />}
        />

        <Route path="/industries/municipal-water" element={<MunicipalWater />} />
        <Route
          path="/industries/municipal-wastewater"
          element={<MunicipalWastewater />}
        />
        <Route
          path="/industries/industrial-wastewater"
          element={<IndustrialWastewater />}
        />
        <Route
          path="/industries/waste-management"
          element={<WasteManagement />}
        />
        <Route path="/industries/oil-gas-energy" element={<OilGasEnergy />} />

        <Route path="/services" element={<Services />} />
        <Route
          path="/services/ongoing-unlimited-support"
          element={<OngoingUnlimitedSupport />}
        />
        <Route
          path="/services/project-management"
          element={<ProjectManagement />}
        />
        <Route
          path="/services/process-optimization"
          element={<ProcessOptimization />}
        />
        <Route
          path="/services/systems-engineering"
          element={<SystemsEngineering />}
        />
        <Route
          path="/services/customized-solutions"
          element={<CustomizedSolutions />}
        />
        <Route path="/services/analytics" element={<Analytics />} />

        <Route path="/about/contact-us" element={<ContactUs />} />
        <Route
          path="/about/history-values-culture-people-leadership"
          element={<HistoryValuesCulturePeopleLeadership />}
        />
        <Route path="/about/news" element={<News />} />
        <Route path="/about/blog-social-media" element={<BlogSocialMedia />} />
        <Route path="/about/events" element={<Events />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
