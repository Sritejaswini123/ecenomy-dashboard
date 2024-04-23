import Sidebar from "./components/Sidebar";
import Tabs from "./components/Tabs";
import DashboardData from "./components/DashboardData";
import Graphpage from "./components/Graphpage";
import Graphdata from "./components/Graphdata";

const App = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="flex-none">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        {/* Tabs */}
        <div className="flex-none">
          <Tabs />
        </div>

        {/* Dashboard Data */}
        <div className="flex-grow">
          <DashboardData />
        </div>

        {/* Graph Page */}
        <div className="flex-grow">
          <Graphpage />
        </div>
 {/* Graph DATA */}
 <div className="flex-grow">
          <Graphdata />
        </div>

      </div>
    </div>
  );
};

export default App;
