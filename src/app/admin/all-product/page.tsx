import TableAllProduct from "@/components/Table/TableAllProduct";
import SideNavbar from "@/components/Sidebar/SideNavbar";

const AllProductPage = () => {
  console.log("all product page")
  return (
    <div className="h-auto flex">
      <SideNavbar />
      <TableAllProduct />
    </div>
  );
};

export default AllProductPage;