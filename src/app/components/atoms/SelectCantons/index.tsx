import React, { useState } from "react";
import { AutoComplete } from "antd";

interface Canton {
   isoCode: string;
   name: [{ language: string; text: string }];
}

interface SelectCantonsProps {
   cantons: Canton[];
   onChange: (isoCode: string) => void;
}

const SelectCantons: React.FC<SelectCantonsProps> = ({ cantons, onChange }) => {
   const [inputValue, setInputValue] = useState("");
   const [filteredCantons, setFilteredCantons] = useState<Canton[]>([]);

   const handleSearch = (searchText: string) => {
      setInputValue(searchText);
      const filtered = searchText.trim()
         ? cantons.filter((canton) =>
              canton.name.some(
                 (n) =>
                    n.language === "EN" &&
                    n.text.toLowerCase().includes(searchText.toLowerCase())
              )
           )
         : cantons;
      setFilteredCantons(filtered);
   };

   const handleSelect = (value: string, option: any) => {
      setInputValue(option.label);
      onChange(value);
   };

   const handleFocus = () => {
      setFilteredCantons(cantons);
   };

   const options = filteredCantons.map((canton) => ({
      value: canton.isoCode,
      label: canton.name.find((n) => n.language === "EN")?.text || "Unknown",
   }));

   return (
      <AutoComplete
         style={{ width: "100%" }}
         options={options}
         value={inputValue}
         onSearch={handleSearch}
         onSelect={handleSelect}
         onFocus={handleFocus}
         data-cy='select-canton'
         placeholder='Select a Canton'
      />
   );
};

export default SelectCantons;
