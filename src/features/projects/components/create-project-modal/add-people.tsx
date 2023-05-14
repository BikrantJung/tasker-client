"use client";
import { Autocomplete, AutocompleteInput, AutocompleteItem, AutocompleteTitle } from "@/components/ui/autocomplete";
import { KeyboardEvent, useState } from "react";
import { SearchResult } from "./search-result";

export const AddPeople = () => {
  const [query, setQuery] = useState("");
  const [resData,setResData] = useState<any>()
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [options, setOptions] = useState(['Option 1', 'Option 2', 'Option 3']);
  const handleOptionSelect = (option:string) => {
    setSelectedOption(option);
  };
async function handleQueryChange(query:string){
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
  const data =await res.json()
  setResData(data)

}
console.log(resData)
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    if (key === "ArrowUp") { // Up arrow key
      event.preventDefault();

      setSelectedOption((prevSelectedOption) => {
        const index = options.indexOf(prevSelectedOption);

        if (index > 0) {
          return options[index - 1];
        }

        return prevSelectedOption;
      });
    } else if (key === "ArrowDown") { // Down arrow key
      event.preventDefault();
      setSelectedOption((prevSelectedOption) => {
        const index = options.indexOf(prevSelectedOption);

        if (index < options.length - 1) {
          return options[index + 1];
        }

        return prevSelectedOption;
      });
    } else if (key === "Enter") { // Enter key
      event.preventDefault();

      const selectedOptionIndex = options.indexOf(selectedOption);

      if (selectedOptionIndex !== -1) {
        const selectedOptionValue = options[selectedOptionIndex];

      }
    }
  };

  return (
    <Autocomplete>
      <AutocompleteInput id='add-people' onChange={(e)=>handleQueryChange(e.target.value)} onKeyDown={handleKeyDown}/>
      <AutocompleteTitle>Results</AutocompleteTitle>
      <div className="flex flex-col">
      {options.map((option) => (
        <AutocompleteItem key={option} onClick={() => handleOptionSelect(option)} className={selectedOption === option ? 'bg-muted' : 'bg-transparent'}>
        {option}
            </AutocompleteItem>
      ))}
       
      </div>
    </Autocomplete>
  );
};
