import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

interface EmojiRadioGroupProps {
  name: string;
  options: { value: string; emoji?: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const EmojiRadioGroup: React.FC<EmojiRadioGroupProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <RadioGroup
      onValueChange={onChange}
      value={selectedValue}
      className="space-y-2"
    >
      {options.map((option) => (
        <label
          key={option.value}
          className={cn(
            "flex px-[1.4rem] py-[0.9rem] items-center justify-between w-full p-3 border rounded-lg cursor-pointer bg-white transition-all",
            selectedValue === option.value
              ? "border-[#31728D]"
              : "border-gray-300"
          )}
        >
          <span className="flex items-center space-x-2 text-[1.6rem]">
            {option.emoji && (
              <span className="text-[1.6rem]">{option.emoji}</span>
            )}
            <span className="text-black font-medium">{option.value}</span>
          </span>
          <RadioGroupItem
            value={option.value}
            className="w-[19px] h-[19px] border-[#D2CFDF] rounded-full transition-all  data-[state=checked]:bg-[#31728D] data-[state=checked]:border-[#31728D]  data-[state=checked]:text-white data-[state=checked]:shadow-[inset_0_0_0_4px_white] "
          />
        </label>
      ))}
    </RadioGroup>
  );
};

export default EmojiRadioGroup;
