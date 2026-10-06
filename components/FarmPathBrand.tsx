import { StyleSheet, Text, View } from "react-native";

type FarmPathBrandProps = {
  showText?: boolean;
  textClassName?: string;
  compact?: boolean;
  light?: boolean;
  stacked?: boolean;
  markSize?: number;
  textSize?: number;
};

export function FarmPathBrand({
  showText = true,
  textClassName = "",
  compact = false,
  light = false,
  stacked = false,
  markSize,
  textSize,
}: FarmPathBrandProps) {
  const resolvedMarkSize = markSize ?? (compact ? 24 : 46);
  const resolvedTextSize = textSize ?? (compact ? 20 : 38);

  return (
    <View style={[styles.brand, stacked ? styles.stacked : styles.horizontal]}>
      <View
        style={{
          width: resolvedMarkSize,
          height: resolvedMarkSize,
          marginRight: stacked ? 0 : 7,
          marginBottom: stacked ? 5 : 0,
        }}
      >
        <View
          style={[
            styles.leaf,
            styles.leftLeaf,
            {
              backgroundColor: light ? "#f8f7ed" : "#16804c",
              width: resolvedMarkSize * 0.36,
              height: resolvedMarkSize * 0.55,
              left: resolvedMarkSize * 0.15,
              top: resolvedMarkSize * 0.28,
            },
          ]}
        />
        <View
          style={[
            styles.leaf,
            styles.rightLeaf,
            {
              backgroundColor: light ? "#f8f7ed" : "#16804c",
              width: resolvedMarkSize * 0.36,
              height: resolvedMarkSize * 0.62,
              left: resolvedMarkSize * 0.49,
              top: resolvedMarkSize * 0.06,
            },
          ]}
        />
      </View>

      {showText ? (
        <Text
          className={textClassName}
          style={{
            color: light ? "#ffffff" : "#073d2e",
            fontSize: resolvedTextSize,
            fontWeight: "800",
          }}
        >
          FarmPath
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  brand: {
    alignItems: "center",
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
  },
  stacked: {
    flexDirection: "column",
  },
  leaf: {
    position: "absolute",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 18,
  },
  leftLeaf: {
    transform: [{ rotate: "-34deg" }],
  },
  rightLeaf: {
    transform: [{ rotate: "34deg" }],
  },
});
