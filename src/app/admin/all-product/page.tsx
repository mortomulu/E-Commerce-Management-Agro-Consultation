import TableAllProduct from "@/components/Table/TableAllProduct"
import SideNavbar from "@/components/Sidebar/SideNavbar"


const AllProductPage = () => {

    return (
        <div className="h-auto flex">
        <SideNavbar/>
        <TableAllProduct/>
        </div>
    )
}

export default AllProductPage