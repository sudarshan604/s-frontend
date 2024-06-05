import { getDisplayedValue } from "../../utils/select.helper";
import Icon from "@/assets";

export interface SelectProps {
  children: React.ReactNode;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ value, children, onChange }: SelectProps) => {
  const displayValue = getDisplayedValue(value, children);

  return (
    <div className="relative w-max ">
      <select
        onChange={onChange}
        className="absolute opacity-0   top-0 left-0 w-full h-full"
      >
        {children}
      </select>
      {/* // TODO: Fix outline issued*/}
      <div
        className="text-gray-700
         bg-primary-200
         text-base
         rounded-lg
       px-3 py-4
       pr-[52px]
       peer-focus:outline-double
       peer-hover:text-black
      "
      >
        {displayValue}

        {/* // TODO: hover  issued*/}

        <div
          className=" absolute top-0 
         bottom-0
         m-auto
        right-[10px]
        w-6 h-6
        pointer-events-none
        "
        >
          <Icon type="chevrondown" strokeWidth={1} width={24} />
        </div>
      </div>
    </div>
  );
};

export default Select;
