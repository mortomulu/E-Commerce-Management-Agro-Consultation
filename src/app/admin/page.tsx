import SideNavbar from "@/components/Sidebar/SideNavbar";
import CardDataStatsContainer from "@/components/CardDataStats/CardDataStatsContainer";

export default function DashboardPage() {
  return (
    <div className="h-auto flex">
      <SideNavbar />
      <CardDataStatsContainer />
    </div>
  );
}
