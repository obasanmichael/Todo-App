import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AddCircleIcon from "@mui/icons-material/AddCircle";

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
      <div className="flex flex-col w-full">
        <input
          {...register("title")}
          className=" text-sm rounded p-4 pl-5 h-10 w-full my-3"
          placeholder="Create a new todo..."
        />
        {errors.title && <p>{errors.title.message}</p>}
      </div>
      <button className="ml-3 block lg:hidden">
        <AddCircleIcon style={{ color: "#64748b" }} />
      </button>
    </form>
  );
};

export default Form;
