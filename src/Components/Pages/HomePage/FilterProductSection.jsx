import React, { useState } from "react";
import { productByCategory } from "../../../data";
import UniqueProductCard from "../../General/UniqueProductCard";

const categories = [
  { key: "all", label: "All" },
  { key: "beauty", label: "Beauty" },
  { key: "womens dresses", label: "Women Dresses" },
  { key: "womens jewellery", label: "Women Jewellery" },
  { key: "womens shoes", label: "Women Shoes" },
  { key: "womens watches", label: "Women Watches" },
];

export default function FilterProductSection() {
  const [productData, setProductData] = useState(productByCategory);
  const [activeTab, setActiveTab] = useState("all");

  const applyFilter = (tabValue) => {
		console.log(tabValue)
    setActiveTab(tabValue);

    if (tabValue === "all") {
      setProductData(productByCategory);
      return;
    }

    const filterData = productByCategory.filter(
      (item) => item.category.toLowerCase() === tabValue.toLowerCase()
    );
    setProductData(filterData);
  };

  const tabClass = (tabValue) =>
    [
      "w-full text-center py-2 border-b-2 transition-colors",
      activeTab === tabValue
        ? "border-b-primary text-primary font-semibold"
        : "border-transparent",
    ].join(" ");

  return (
    <div className="filtered-product-section py-10">
      {/* Category tabs */}
      <div className="categories w-full hidden lg:flex items-center justify-around">
        {categories.map(({ key, label }) => {
          return (
            <div className="w-full text-center" key={key}>
              <button
                className={tabClass(key)}
                onClick={() => applyFilter(key)}
              >
                {label}
              </button>
            </div>
          );
        })}
      </div>

			<div className="lg:hidden mb-4">
				<select className="w-full p-2 outline-0 rounded-md bg-soft-bg border border-primary" value={activeTab} onChange={(e)=>applyFilter(e.target.value)}>
					{
						categories.map(({key, label}) =>{
							return (	
								<option key={key} value={key}>{label}</option>
							)
						})
					}
				</select>
			</div>

      {/* Product grid */}
      <div className="grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-5 gap-5 border-t py-5 -mt-px">
        {productData.map((item) => (
          <UniqueProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
