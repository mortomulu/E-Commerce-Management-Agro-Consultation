import SelectGroup from "../SelectGroup/SelectGroup";
import { Button } from "flowbite-react";

const FormAddProduct = () => {
  return (
    <div className=" w-screen ml-56 p-10 rounded-sm border border-stroke bg-inherit shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Add Product
        </h4>
      </div>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-col gap-5.5 p-6.5 border-gray-500">
          <div>
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Default Input"
              className="w-full border-gray-300 rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Price
            </label>
            <input
              type="text"
              placeholder="Default Input"
              className="w-full border-gray-300 rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <SelectGroup />
          <div>
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Default textarea
            </label>
            <textarea
              rows={6}
              placeholder="Default textarea"
              className="w-full border-gray-300 rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            ></textarea>
          </div>
          <Button className="px-6 bg-green-500" color="blue" pill>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormAddProduct;
