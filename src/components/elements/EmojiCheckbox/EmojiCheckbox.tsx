import { Checkbox } from "@/components/ui/checkbox";

interface EmojiCheckboxProps {
  emoji?: string;
  value: string;
  checked: boolean;
  onChange: () => void;
}

const EmojiCheckbox: React.FC<EmojiCheckboxProps> = ({
  emoji,
  value,
  checked,
  onChange,
}) => {
  return (
    <label
      className={`flex items-center justify-between w-full p-3 border rounded-lg cursor-pointer bg-white transition-all ${
        checked ? "border-[#31728D] " : "border-gray-300 "
      }`}
    >
      <span className="flex items-center space-x-2">
        {emoji && <span className="text-lg">{emoji}</span>}
        <span className="text-black font-medium">{value}</span>
      </span>
      <Checkbox
        checked={checked}
        onCheckedChange={onChange}
        className="h-6 w-6 border-[#D2CFDF] rounded-md data-[state=checked]:bg-[#31728D] data-[state=checked]:border-[#31728D] data-[state=checked]:text-white"
      />
    </label>
  );
};

export default EmojiCheckbox;
