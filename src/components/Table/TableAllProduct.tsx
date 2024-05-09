import { Product } from "@/types/product";
import Image from "next/image";
import Action from "./Action";

const productData: Product[] = [
  {
    product_name: "pupuk",
    price: 20000,
    product_category: "pra",
    url_image:
      "https://1.bp.blogspot.com/-H1vsG54kwcA/XYRtvqX_QPI/AAAAAAAAAQY/Zt8-FupCmgUltg68r1U0viPaikoIfXw2gCNcBGAsYHQ/w1200-h630-p-k-no-nu/benih-padi-2.jpg",
    desc: "lorem ipsum dolor amet",
  },
  {
    product_name: "pupuk",
    price: 20000,
    product_category: "pra",
    url_image:
      "https://1.bp.blogspot.com/-H1vsG54kwcA/XYRtvqX_QPI/AAAAAAAAAQY/Zt8-FupCmgUltg68r1U0viPaikoIfXw2gCNcBGAsYHQ/w1200-h630-p-k-no-nu/benih-padi-2.jpg",
    desc: "lorem ipsum dolor amet",
  },
  {
    product_name: "pupuk",
    price: 20000,
    product_category: "pra",
    url_image:
      "https://1.bp.blogspot.com/-H1vsG54kwcA/XYRtvqX_QPI/AAAAAAAAAQY/Zt8-FupCmgUltg68r1U0viPaikoIfXw2gCNcBGAsYHQ/w1200-h630-p-k-no-nu/benih-padi-2.jpg",
    desc: "lorem ipsum dolor amet",
  },
  {
    product_name: "pupuk",
    price: 20000,
    product_category: "pra",
    url_image:
      "https://1.bp.blogspot.com/-H1vsG54kwcA/XYRtvqX_QPI/AAAAAAAAAQY/Zt8-FupCmgUltg68r1U0viPaikoIfXw2gCNcBGAsYHQ/w1200-h630-p-k-no-nu/benih-padi-2.jpg",
    desc: "lorem ipsum dolor amet",
  },
  {
    product_name: "pupuk",
    price: 20000,
    product_category: "pra",
    url_image:
      "https://1.bp.blogspot.com/-H1vsG54kwcA/XYRtvqX_QPI/AAAAAAAAAQY/Zt8-FupCmgUltg68r1U0viPaikoIfXw2gCNcBGAsYHQ/w1200-h630-p-k-no-nu/benih-padi-2.jpg",
    desc: "lorem ipsum dolor amet",
  },
  {
    product_name: "pupuk",
    price: 20000,
    product_category: "pra",
    url_image:
      "https://1.bp.blogspot.com/-H1vsG54kwcA/XYRtvqX_QPI/AAAAAAAAAQY/Zt8-FupCmgUltg68r1U0viPaikoIfXw2gCNcBGAsYHQ/w1200-h630-p-k-no-nu/benih-padi-2.jpg",
    desc: "lorem ipsum dolor amet",
  },
];

const TableAllProduct = () => {
    return (
      <div className=" w-screen ml-56 p-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="px-4 py-6 md:px-6 xl:px-7.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            All Product
          </h4>
        </div>
  
        <div className="grid grid-cols-6  border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Product Name</p>
          </div>
          <div className="col-span-1 hidden items-center sm:flex">
            <p className="font-medium">Category</p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <p className="font-medium">Price</p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Description</p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <p className="font-medium">Action</p>
          </div>
        </div>
  
        {productData.map((product, key) => (
          <div
            className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
            key={key}
          >
            <div className="col-span-2 flex items-center">
              <div className="flex  items-center gap-4 sm:flex-row sm:items-center">
                <div className="h-12.5! w-15 flex rounded-md">
                  <img
                    src={product.url_image}
                    width={60}
                    height={50}
                    alt="Product"
                  />
                </div>
                <p className="text-sm text-black dark:text-white">
                  {product.product_name}
                </p>
              </div>
            </div>
            <div className="col-span-1 hidden items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {product.product_category}
              </p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="text-sm text-black dark:text-white">
                ${product.price}
              </p>
            </div>
            <div className="col-span-2  flex items-center">
              <p className="text-sm text-black dark:text-white">{product.desc}</p>
            </div>
            <Action />
          </div>
        ))}
      </div>
    );
  };
  
  export default TableAllProduct;
  
