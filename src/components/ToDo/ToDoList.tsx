import clearIcon from "./assets/Combined Shape 2.svg";
import checkBox from "./assets/checkbox.png";
import checkedImg from "./assets/CheckedImg.png";
import { useState, useEffect } from "react";

export interface Item {
  id: number;
  title: string;
  completed: boolean;
}

interface Props {
  items: Item[];
  onDelete: (id: number) => void;
}

const ToDoList = ({ items, onDelete }: Props) => {
  const [checkedStates, setCheckedStates] = useState(items.map(() => false));

  useEffect(() => {
    setCheckedStates(items.map(() => false));
  }, [items]);

  const handleButtonClick = (index: number) => {
    setCheckedStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const filteredItems = items.filter((_, index) => !checkedStates[index]);

  if (items.length === 0) return null;

  return (
    <div className="m-3 flex flex-col border rounded-md justify-center bg-white">
      <ul className="divide-y divide-neutral-200">
        {items.map((item, index) => (
          <li
            className={`flex items-center justify-between p-4 text-md ${
              checkedStates[index]
                ? "line-through text-gray-400"
                : "text-textGray"
            }`}
            key={index}
          >
            <div className="flex items-center">
              <button onClick={() => handleButtonClick(index)} className="pr-4">
                <img
                  src={checkedStates[index] ? checkedImg : checkBox}
                  className="h-6 w-6"
                  alt=""
                />
              </button>
              {item.title}
            </div>
            <button onClick={() => onDelete(item.id)}>
              <img src={clearIcon} alt="" />
            </button>
          </li>
        ))}
      </ul>
      <ul className="">
        <li className="flex justify-between p-4 text-xs text-gray-400 border">
          {filteredItems.length === 1 || filteredItems.length === 0
            ? filteredItems.length + " item left"
            : filteredItems.length + " items left"}
          <p>Clear completed</p>
        </li>
      </ul>
    </div>
  );
};

export default ToDoList;
