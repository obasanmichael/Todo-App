import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import checkBox from "./assets/checkbox.png";

interface Props {
  onSubmit: (data: ToDoFormData) => void;
}

const schema = z.object({
  title: z.string().min(1),
});
type ToDoFormData = z.infer<typeof schema>;
const Form = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ToDoFormData>({ resolver: zodResolver(schema) });
  return (
    <form
      className="flex justify-between mx-3 items-center"
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="relative flex flex-col items-center w-full">
        <div className="relative flex items-center w-full">
          <img
            src={checkBox}
            alt=""
            className="absolute h-5 w-5 left-3 top-1/2 transform -translate-y-1/2"
          />
          <input
            {...register("title")}
            className="text-md rounded p-6 pl-12 h-10 w-full my-3 text-currentTyping"
            placeholder="Create a new todo..."
          />
        </div>
        {errors.title && <p>{errors.title.message}</p>}
      </div>

      <button className="ml-3 block lg:hidden">
        <AddCircleIcon style={{ color: "#64748b" }} />
      </button>
    </form>
  );
};

export default Form;
