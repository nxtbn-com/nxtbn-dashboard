import React, { useState } from "react";
import {
  NXAlertCircle,
  NXCheck,
  NXDoubleSelect,
  NXDownArrow,
} from "../../icons";
import "./select-hide.css";
import makeAnimated, { MultiValue } from "react-select/animated";
import { tagOptions } from "./data";
import {
  CrossIcon,
  IndicatorSeparator,
} from "react-select/dist/declarations/src/components/indicators";
import SelectStyled from "../Select";
import { Value } from "sass";

function AddNewProductMain() {
  const [text, setText] = useState<string>("");

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const animatedComponents = makeAnimated();

  let [isChecked, setIsChecked] = useState<boolean>(false);

  let handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
  }

  const customStyle = {
    
      control: (provided: any, state: any) => ({
        ...provided,

        borderColor: state.isFocused ? '#0CAF60' : "white",
        borderWidth: state.isFocused ? "1px": "0px",
        boxShadow: state.isFocused ? '0 0 0 1px #0CAF60' : "white",
        '&:hover': {
          borderColor: '#0CAF60'
        },

        padding: "4px 8px",
        outline: "white",
        
      }),
      multiValue: (provided: any, state: any) => ({
        ...provided,

        borderRadius: "20px"
      })
    }
  

  const categoryOption = [
    { value: "Accessories", label: "Accessories" },
    {
      value: "fashion",
      label: "Fashion",
      subcategories: [
        { value: "men_dress", label: "Men Dress Collection" },
        { value: "women_dress", label: "Women Dress Collection" },
      ],
    },
    { value: "electronics", label: "Electronics" },
    { value: "books", label: "Books" },
  ];

  return (
    <section className="px-10 py-5">
      {/* top action button */}
      <div className="hidden md:flex md:justify-end md:gap-5 md:mb-5">
        <button className="text-[#0CAF60] border border-[#0CAF60] px-10 py-3 rounded-xl font-nunito font-[900]">
          Discard
        </button>
        <button
          className="text-white bg-[#0CAF60] px-10 py-3 rounded-xl font-nunito font-[900] disabled:bg-[#0caf609a]"
          disabled
        >
          Save
        </button>
      </div>
      {/* body */}
      <div className="flex flex-col justify-center md:flex-row gap-5">
        <div className="w-full md:w-[60%]">
          <div className="bg-white p-5 rounded-md">
            <div className="flex items-center gap-3">
              <h1 className="font-nunito font-[900] text-2xl">
                Product Information
              </h1>
              <NXAlertCircle className="text-base-300" />
            </div>
            <div className="my-5">
              <label htmlFor="product_name">Product Name</label>
              <input
                type="text"
                id="product_name"
                placeholder="Type your product name"
                className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60]"
              />
            </div>
            <div className="mt-5">
              <div className="flex justify-between">
                <label htmlFor="product_description">Description</label>
                <span className="text-base-300 text-sm">
                  {text.length}/2000
                </span>
              </div>
              <textarea
                placeholder="Type your product description here"
                name=""
                id="product_description"
                className="w-full px-5 py-3 h-[224px] bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60]"
                onChange={handleTextChange}
              ></textarea>
            </div>
          </div>
          <div className=" bg-white p-5 rounded-md mt-5">
            <div>
              <label htmlFor="media">Media</label>
              <label htmlFor="media">
                <div className="mt-2 cursor-pointer border-[2px] border-dashed border-base-50 text-black font-light p-5 flex justify-center items-center flex-col rounded-xl">
                  <div className="mb-2">
                    <button className="px-5 py-2 rounded-full bg-secondary-100 text-black mr-2">
                      Upload new
                    </button>
                    <button>Select existing</button>
                  </div>
                  <div>Accept images, videos, or 3D models</div>

                  <input id="media" type="file" className="hidden" />
                </div>
              </label>
            </div>
          </div>
          {/* pricing */}
          <div className=" bg-white p-5 rounded-md mt-5">
            <div className="flex items-center gap-3">
              <h1 className="font-nunito font-[900] text-2xl">Pricing</h1>
              <NXAlertCircle className="text-base-300" />
            </div>
            <div className="flex items-center gap-5 mt-5">
              <div className="w-full">
                <label htmlFor="price">Price</label>
                <input
                  id="price"
                  type="text"
                  placeholder="$0.00"
                  className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black"
                />
              </div>
              <div className="w-full">
                <label htmlFor="compare-price">Price</label>
                <input
                  id="compare-price"
                  type="text"
                  placeholder="$0.00"
                  className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 my-5">
              <input type="checkbox" name="" id="bangladesh" />
              <p className="font-nunito">Charge tax on this product</p>
            </div>
            <div className="flex items-center gap-5 mt-5">
              <div className="w-full">
                <label htmlFor="cost_per_item">Cost per item</label>
                <input
                  id="cost_per_item"
                  type="text"
                  placeholder="$0.00"
                  className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black"
                />
              </div>
              <div className="w-full">
                <label htmlFor="profit">Profit</label>
                <input
                  id="profit"
                  type="text"
                  placeholder="--"
                  className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black"
                />
              </div>
              <div className="w-full">
                <label htmlFor="margin">Margin</label>
                <input
                  id="margin"
                  type="text"
                  placeholder="--"
                  className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black"
                />
              </div>
            </div>
          </div>
          {/* shipping */}
          <div className=" bg-white p-5 rounded-md mt-5">
            <div>
              <h1 className="font-nunito font-[900] text-2xl">Shipping</h1>
            </div>
            <div className="flex items-center gap-3 my-7">
              <input
                type="checkbox"
                name=""
                id="physical_product"
                checked={isChecked}
                onChange={handleChecked}
              />
              <p className="font-nunito">This is a physical product</p>
            </div>
            {isChecked && (
              <div className="flex items-center gap-5 mt-5">
                <div className="w-full">
                  <label htmlFor="weight">Weight</label>
                  <input
                    id="weight"
                    type="text"
                    placeholder="0.0"
                    className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black"
                  />
                </div>
                <div className="w-[90px] md:w-[150px] relative">
            
                  <SelectStyled
                    options={[
                      { value: "kg", label: "Kg" },
                      { value: "pound", label: "Pound" },
                    ]}
                
                  />
                  <div className="absolute inset-y-0 right-0 top-10 flex items-center px-2 pointer-events-none">
                    <NXDoubleSelect />
                  </div>
                </div>
              </div>
            )}
            <hr className="border w-full my-5 border-[#C8C8C8]" />

            <button className="font-nunito font-[800] flex items-center gap-1 mt-3">
              + Add customs information
            </button>
          </div>
          {/* variant */}
          <div className=" bg-white p-5 rounded-md mt-5">
            <div>
              <h1 className="font-nunito font-[900] text-2xl">Variants</h1>
            </div>
            <button className="font-nunito font-[800] flex items-center gap-1 mt-3">
              + Add options like size or color
            </button>
          </div>
        </div>
        <div className="w-full md:w-[40%]">
          <div className=" bg-white p-5 rounded-md">
            <div>
              <h1 className="font-nunito font-[900] text-2xl">Status</h1>
            </div>
            <div className="w-full relative">
              <SelectStyled
                options={[
                  { value: "active", label: "Active" },
                  { value: "inactive", label: "InActive" },
                ]}
              />
              <div className="absolute inset-y-0 right-0 top-10 flex items-center px-2 pointer-events-none"></div>
            </div>
          </div>
          {/* publishing */}
          <div className=" bg-white p-5 rounded-md mt-5">
            <div className="flex items-center gap-3">
              <h1 className="font-nunito font-[900] text-2xl">Publishing</h1>
              <NXAlertCircle className="text-base-300" />
            </div>
            <p className="font-bold mt-7">Sales channels</p>

            <div className="flex gap-2 items-center mt-3">
              <input type="checkbox" name="" id="sales-channel" />
              <label htmlFor="sales-channel">Sales channels</label>
            </div>
            <div className="flex gap-2 items-start mt-3">
              <input type="checkbox" name="" id="sales-channel" />
              <label htmlFor="sales-channel">
                Point of Sale <br />
                <span className="text-sm">
                  Point of Sale has not been set up.
                </span>
                <br />
                <span className="text-sm">
                  Finish the remaining steps to start selling in person.
                </span>
              </label>
            </div>
            <p className="font-bold mt-7">Markets</p>

            <div className="flex gap-2 items-center mt-3">
              <input type="checkbox" name="" id="bangladesh" />
              <label htmlFor="bangladesh">Bangladesh and International</label>
            </div>
          </div>
          {/* product organization */}
          <div className=" bg-white p-5 rounded-md mt-5">
            <div className="flex items-center gap-3">
              <h1 className="font-nunito font-[900] text-2xl">
                Product organization
              </h1>
              <NXAlertCircle className="text-base-300" />
            </div>

            <div className="w-full relative mt-10">
              <label htmlFor="category">Category</label>
              <SelectStyled options={categoryOption} />
            </div>
            <div className="my-5">
              <label htmlFor="product_type">Product type</label>
              <input
                id="product_type"
                type="text"
                className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-md font-nunito outline-[#0CAF60]"
              />
            </div>
            <div className="my-5">
              <label htmlFor="vendor">Vendor</label>
              <input
                id="vendor"
                type="text"
                className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-md font-nunito outline-[#0CAF60]"
              />
            </div>
            <div className="my-5">
              <label htmlFor="tags">Tags</label>
              <div className="pt-3">
               
                <SelectStyled  
                isMulti={true} 
                customStyles={customStyle} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-center gap-5 mb-5 md:hidden">
          <button className="text-[#0CAF60] border border-[#0CAF60] px-10 py-3 rounded-xl font-nunito font-[900]">
            Discard
          </button>
          <button
            className="text-white bg-[#0CAF60] px-10 py-3 rounded-xl font-nunito font-[900] disabled:bg-[#0caf609a]"
            disabled
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
}

export default AddNewProductMain;
