import { Checkbox } from "@/components/ui/checkbox";

interface EmojiCheckboxProps {
  value: string;
  emoji?: string;
  checked: boolean;
  onChange: () => void;
}

const EmojiCheckbox: React.FC<EmojiCheckboxProps> = ({
  value,
  emoji,
  checked,
  onChange,
}) => {
  return (
    <label
      className={`flex px-[1.4rem] py-[0.9rem] items-center justify-between w-full p-3 border rounded-lg cursor-pointer bg-white transition-all ${
        checked ? "border-[#31728D] " : "border-gray-300 "
      }`}
    >
      <span className="flex items-center space-x-2 text-[1.6rem]">
        {emoji && <span className="text-lg">{emoji}</span>}
        <span className="text-black font-medium">{value}</span>
      </span>
      <Checkbox
        checked={checked}
        onCheckedChange={onChange}
        className="w-[19px] h-[19px] border-[#D2CFDF] rounded-md data-[state=checked]:bg-[#31728D] data-[state=checked]:border-[#31728D] data-[state=checked]:text-white"
      />
    </label>
  );
};

export default EmojiCheckbox;
