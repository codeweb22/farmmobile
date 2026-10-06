import { View } from "react-native";

type ProgressDotsProps = {
  activeIndex: number;
  total: number;
  activeColor?: string;
  inactiveColor?: string;
};

export function ProgressDots({
  activeIndex,
  total,
  activeColor = "#1d6c46",
  inactiveColor = "#dfe5df",
}: ProgressDotsProps) {
  return (
    <View className="flex-row items-center gap-2">
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === activeIndex;

        return (
          <View
            key={`dot-${index}`}
            className={isActive ? "h-[10px] rounded-[6px]" : "h-[10px] w-[10px] rounded-full"}
            style={{
              width: isActive ? 22 : 10,
              backgroundColor: isActive ? activeColor : inactiveColor,
            }}
          />
        );
      })}
    </View>
  );
}
