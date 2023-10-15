import { useState } from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import ToDoList, { Item } from "./components/ToDo/ToDoList";
import Form from "./components/ToDo/Form";
import FilterList from "./components/ToDo/FilterList";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const filteredItems =
    selectedCategory === "all"
      ? items
      : selectedCategory === "active"
      ? items.filter((item) => !item.completed)
        : items.filter((item) => item.completed);
  
  const filterItemsByCategory = (category: string) => {
    setSelectedCategory(category)
  }

  const toggleCompletion = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };
  return (
    <>
      <div className="bg-gray-200 h-[200vh]">
        <div className="relative">
          <ToDo />
        </div>
        <div className="">
          <div className="absolute inset-x-0 top-28 z-10 max-w-[675px] px-3 mx-auto">
            <Form
              onSubmit={(item) =>
                setItems([
                  ...items,
                  { ...item, id: items.length + 1, completed: false },
                ])
              }
            />
            <ToDoList
              items={filteredItems}
              onDelete={(id: number) =>
                setItems((items) => items.filter((item) => item.id !== id))
              }
              onToggle={toggleCompletion}
            />
            <FilterList
              onSelectCategory={filterItemsByCategory}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
