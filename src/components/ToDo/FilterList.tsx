
interface Props{
  onSelectCategory: (category: string) => void;
}
const FilterList = ({ onSelectCategory }: Props) => {
  const handleCategoryClick = (category: string) => {
    onSelectCategory(category)
  }
  return (
    <div className="flex text-sm justify-between items-center rounded px-[50px] text-gray-500 py-6 bg-white h-[10px] m-5">
      <p className="hover:text-textGray" onClick={()=> handleCategoryClick('all')}>All</p>
      <p className="hover:text-textGray" onClick={()=> handleCategoryClick('active')}>Active</p>
      <p className="hover:text-textGray" onClick={()=> handleCategoryClick('completed')}>Completed</p>
    </div>
  );
}

export default FilterList