import { useState } from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import ToDoList, { Item } from "./components/ToDo/ToDoList";
import Form from "./components/ToDo/Form";
import FilterList from "./components/ToDo/FilterList";

function App() {
  const [items, setItems] = useState<Item[]>([

  ]);
  


  return (
    <>
      <div className="bg-gray-100 h-[100vh]">
        <div className="relative">
          <ToDo />
        </div>
        <div className="absolute  inset-x-0 top-28 z-10 mx-3">
          <Form
            onSubmit={(item) =>
              setItems([...items, { ...item, id: items.length + 1 }])
            }
          />
          <ToDoList
            items={items}
            onDelete={(id: number) =>
              setItems((items) => items.filter((item) => item.id !== id))
            }
            
          />
          <FilterList />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;
