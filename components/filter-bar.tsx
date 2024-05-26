"use client";
import {
  Input,
  Listbox,
  ListboxItem,
  Slider,
  Button,
  SliderValue,
  ListboxSection,
} from "@nextui-org/react";
import { useMemo, useState } from "react";

export function Filterbar(props: any) {
  const defaultSliderValue = [300, 500];
  const [value, setValue] = useState<SliderValue>(defaultSliderValue);

  const [selectedFilters, setSelectedFilters] = useState([]);

  const selectedValues = useMemo(
    () => Array.from(selectedFilters).join(", "),
    [selectedFilters]
  );

  return (
    <div className="lg:w-1/3 p-4 h-fit lg:h-screen flex flex-col bg-green-50 gap-y-6 shadow-xl">
      <h1 className="font-bold text-green-500 text-xl">Filtre</h1>
      <Input
        label="Caută produsul"
        color="success"
        isClearable
        onClear={() => console.log("Am sters continutul de cautare")}
      />
      <div className="flex flex-col gap-y-6">
        <Slider
          label="Preț"
          step={10}
          formatOptions={{ style: "currency", currency: "RON" }}
          minValue={0}
          maxValue={1000}
          defaultValue={value}
          value={value}
          onChange={setValue}
          color="success"
          className="text-green-500"
        />
        <p className="p-2 bg-green-100 text-green-500">
          Buget:{" "}
          {Array.isArray(value) && value.map((pret) => `${pret} RON`).join("-")}
        </p>
        <div className="grid grid-cols-2 gap-x-4">
          <Input
            type="number"
            min={0}
            max={1000}
            label="De la"
            defaultValue="0"
            color="success"
          />
          <Input
            type="number"
            min={0}
            max={1000}
            label="Până la"
            defaultValue="1000"
            color="success"
          />
        </div>
        <Listbox
          className="text-green-500"
          selectionMode="multiple"
          variant="flat"
          color="success"
          selectedKeys={selectedFilters}
          onSelectionChange={setSelectedFilters}
        >
          {props.filters.map((item: any) => (
            <ListboxSection key={item.id} title={item.id.charAt(0).toUpperCase() + item.id.slice(1)}>
              {item.filters.map((item: any) => (
                <ListboxItem key={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</ListboxItem>
              ))}
            </ListboxSection>
          ))}
        </Listbox>
        <p className="text-green-500">Valori selectate: {selectedValues}</p>
        <Button title="Aplică" color="success" className="text-white">
          Aplică
        </Button>
      </div>
    </div>
  );
}
