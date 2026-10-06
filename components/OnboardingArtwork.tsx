import { View } from "react-native";

type OnboardingArtworkProps = {
  accentColor: string;
};

export function OnboardingArtwork({ accentColor }: OnboardingArtworkProps) {
  return (
    <View className="relative h-[220px] w-full items-center justify-center">
      <View
        className="absolute h-[220px] w-[220px] rounded-full"
        style={{ backgroundColor: `${accentColor}22` }}
      />

      <View className="relative h-[200px] w-full overflow-hidden rounded-[24px] border border-[#1d6c46]/10 bg-[#eff8f0]">
        <View className="absolute right-4 top-4 h-7 w-7 rounded-full bg-[#f4d77d]" />

        <View className="absolute inset-x-0 bottom-0 h-[180px] items-center justify-end">
          <View
            className="absolute bottom-[18px] h-[90px] w-2 rounded-full"
            style={{ backgroundColor: accentColor }}
          />

          <View
            className="absolute bottom-[72px] h-[34px] w-[60px] rounded-[24px]"
            style={{
              backgroundColor: accentColor,
              left: "50%",
              marginLeft: -30,
              transform: [{ rotate: "-32deg" }],
            }}
          />

          <View
            className="absolute bottom-[92px] h-[34px] w-[60px] rounded-[24px]"
            style={{
              backgroundColor: accentColor,
              left: "50%",
              marginLeft: 24,
              transform: [{ rotate: "18deg" }],
            }}
          />

          <View
            className="absolute bottom-[98px] h-[34px] w-[60px] rounded-[24px]"
            style={{
              backgroundColor: accentColor,
              left: "50%",
              marginLeft: -88,
              transform: [{ rotate: "-18deg" }],
            }}
          />
        </View>
      </View>
    </View>
  );
}
