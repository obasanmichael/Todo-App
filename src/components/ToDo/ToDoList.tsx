import ClearIcon from "@mui/icons-material/Clear";

export interface Item {
  id: number;
  title: string;
  completed: boolean;
}

interface Props {
  items: Item[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const ToDoList = ({ items, onDelete, onToggle }: Props) => {
  if (items.length === 0) return null;
  return (
    <div className="m-3 flex flex-col border rounded-md  justify-center bg-white">
      <ul className="divide-y divide-neutral-200  ">
        {items.map((item, index) => (
          <div className="flex justify-between pr-3" key={index}>
            <li className="p-4 text-sm text-gray-500">
              <input
                name=""
                id=""
                checked={item.completed}
                onChange={() => onToggle(item.id)}
                type="checkbox"
                className="mr-5 rounded-full text-gray-200"
              />
              {item.title}
            </li>
            <button onClick={() => onDelete(item.id)}>
              <ClearIcon style={{ color: "#d1d5db" }} />
            </button>
          </div>
        ))}
      </ul>
      <ul className="">
        <li className="flex justify-between p-4 text-xs text-gray-400 border">
          {items.length === 1
            ? items.length + " item left"
            : items.length + " items left"}
          <p>Clear completed</p>
        </li>
      </ul>
    </div>
  );
};

export default ToDoList;
