import { ScrollView, StyleSheet, Text, View } from "react-native";

type ScreenKind =
  | "splash"
  | "welcome"
  | "signup"
  | "login"
  | "home"
  | "crops"
  | "lesson"
  | "video"
  | "practice"
  | "tracking"
  | "harvest"
  | "market"
  | "profit"
  | "settings"
  | "voice"
  | "recommend"
  | "success"
  | "empty";

const screens: ScreenKind[] = [
  "splash",
  "welcome",
  "signup",
  "login",
  "home",
  "crops",
  "lesson",
  "video",
  "practice",
  "tracking",
  "harvest",
  "market",
  "profit",
  "settings",
  "voice",
  "recommend",
  "success",
  "empty",
];

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.phoneShell}>
      <View style={styles.statusBar}>
        <Text style={styles.statusText}>9:41</Text>
        <View style={styles.statusIcons}>
          <View style={styles.signal} />
          <View style={styles.signal} />
          <View style={styles.signal} />
          <View style={styles.battery} />
        </View>
      </View>

      <View style={styles.screenArea}>{children}</View>

      <View style={styles.homeIndicator} />
    </View>
  );
}

function renderLanding(kind: ScreenKind) {
  switch (kind) {
    case "splash":
      return (
        <View style={styles.splashScreen}>
          <View style={styles.foliageTop} />
          <View style={styles.foliageBottom} />
          <View style={styles.brandBlock}>
            <View style={styles.logoMark}>
              <View style={[styles.leaf, styles.leftLeaf]} />
              <View style={[styles.leaf, styles.rightLeaf]} />
            </View>
            <Text style={styles.brandTitle}>FarmPath</Text>
            <Text style={styles.brandTag}>Real Farming. Real Progress.</Text>
          </View>
          <View style={styles.ctaButton}>
            <Text style={styles.ctaText}>Get Started</Text>
          </View>
          <View style={styles.paginationRow}>
            <View style={styles.paginationActive} />
            <View style={styles.paginationDot} />
            <View style={styles.paginationDot} />
            <View style={styles.paginationDot} />
          </View>
        </View>
      );
    case "welcome":
      return (
        <View style={styles.genericScreen}>
          <Text style={styles.smallBrand}>FarmPath</Text>
          <Text style={styles.heroTitle}>Your Farming Journey Starts Here</Text>
          <Text style={styles.heroText}>
            Learn, practice, track and grow your pepper farm — step by step.
          </Text>
          <View style={styles.farmArtwork}>
            <View style={styles.hillOne} />
            <View style={styles.hillTwo} />
            <View style={styles.farmScene} />
          </View>
          <View style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Get Started</Text>
          </View>
          <Text style={styles.smallLink}>I already have an account</Text>
        </View>
      );
    case "signup":
      return (
        <View style={styles.authScreen}>
          <Text style={styles.smallBrand}>FarmPath</Text>
          <Text style={styles.formTitle}>Create your account</Text>
          <Text style={styles.formSubtitle}>
            Join FarmPath and start your farming journey.
          </Text>
          <View style={styles.inputRows}>
            <View style={styles.inputLine} />
            <View style={styles.inputLine} />
            <View style={styles.inputLine} />
            <View style={styles.inputLine} />
          </View>
          <View style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Create account</Text>
          </View>
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.dividerLine} />
          </View>
          <View style={styles.socialRow}>
            <Text style={styles.socialIcon}>G</Text>
            <Text style={styles.socialText}>Continue with Google</Text>
          </View>
          <View style={styles.socialRow}>
            <Text style={styles.socialIcon}></Text>
            <Text style={styles.socialText}>Continue with Apple</Text>
          </View>
          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <Text style={styles.footerLink}>Log in</Text>
          </View>
        </View>
      );
    case "login":
      return (
        <View style={styles.authScreen}>
          <Text style={styles.smallBrand}>FarmPath</Text>
          <Text style={styles.formTitle}>Welcome back</Text>
          <Text style={styles.formSubtitle}>
            Sign in to continue your journey.
          </Text>
          <View style={styles.inputRows}>
            <View style={styles.inputLine} />
            <View style={styles.inputLine} />
          </View>
          <Text style={styles.linkInline}>Forgot password?</Text>
          <View style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Log in</Text>
          </View>
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.dividerLine} />
          </View>
          <View style={styles.socialRow}>
            <Text style={styles.socialIcon}>G</Text>
            <Text style={styles.socialText}>Continue with Google</Text>
          </View>
          <View style={styles.socialRow}>
            <Text style={styles.socialIcon}></Text>
            <Text style={styles.socialText}>Continue with Apple</Text>
          </View>
          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Don’t have an account?</Text>
            <Text style={styles.footerLink}>Sign up</Text>
          </View>
        </View>
      );
    case "home":
      return (
        <View style={styles.dashboardScreen}>
          <View style={styles.topBar}>
            <View>
              <Text style={styles.greeting}>Good morning</Text>
              <Text style={styles.name}>John</Text>
            </View>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>J</Text>
            </View>
          </View>
          <View style={styles.progressPanel}>
            <View style={styles.ringWrap}>
              <View style={styles.ringInner} />
              <Text style={styles.ringText}>35%</Text>
            </View>
            <View style={styles.ringMeta}>
              <Text style={styles.metaTitle}>Overall progress</Text>
              <Text style={styles.metaValue}>12 of 24 days</Text>
              <Text style={styles.metaSmall}>Progress by stage</Text>
            </View>
          </View>
          <View style={styles.taskList}>
            {[
              ["Learn", true],
              ["Watch", true],
              ["Practice", false],
              ["Complete", false],
            ].map(([label, done]) => (
              <View key={String(label)} style={styles.taskRow}>
                <View style={[styles.taskDot, done && styles.taskDotDone]}>
                  {done ? <Text style={styles.checkmark}>✓</Text> : null}
                </View>
                <Text
                  style={[styles.taskLabel, !done && styles.taskLabelMuted]}
                >
                  {label}
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.nextItem}>
            <Text style={styles.nextText}>Next lesson</Text>
            <Text style={styles.arrow}>›</Text>
          </View>
          <View style={styles.navBar}>
            <Text style={styles.navActive}>Home</Text>
            <Text style={styles.navLabel}>Learn</Text>
            <Text style={styles.navLabel}>Progress</Text>
            <Text style={styles.navLabel}>Profile</Text>
          </View>
        </View>
      );
    case "crops":
      return (
        <View style={styles.genericCardScreen}>
          <Text style={styles.panelTitle}>Choose Your Crop</Text>
          <View style={styles.cropGrid}>
            <View style={styles.cropCard}>
              <View style={styles.cropThumb} />
              <Text style={styles.cropText}>Pepper Farming</Text>
            </View>
            <View style={styles.cropCard}>
              <View style={styles.cropThumbAlt} />
              <Text style={styles.cropText}>Tomato Farming</Text>
            </View>
            <View style={styles.cropCard}>
              <View style={styles.cropThumbAlt2} />
              <Text style={styles.cropText}>Cassa Farming</Text>
            </View>
            <View style={styles.cropCard}>
              <View style={styles.cropThumbAlt3} />
              <Text style={styles.cropText}>Plantain Farming</Text>
            </View>
          </View>
          <View style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Continue</Text>
          </View>
        </View>
      );
    case "lesson":
      return (
        <View style={styles.genericCardScreen}>
          <Text style={styles.panelTitle}>Preparing Nursery Bed</Text>
          <Text style={styles.lessonStage}>Step 1 of 4</Text>
          <View style={styles.lessonImage} />
          <Text style={styles.lessonBody}>
            Start by preparing a fertile, weed-free seedbed and level the soil
            before sowing.
          </Text>
          <View style={styles.stepList}>
            <View style={styles.stepRow}>
              <View style={styles.stepCheck} />
              <Text style={styles.stepText}>Clear the area</Text>
            </View>
            <View style={styles.stepRow}>
              <View style={styles.stepCheck} />
              <Text style={styles.stepText}>Mix compost with soil</Text>
            </View>
            <View style={styles.stepRow}>
              <View style={styles.stepCheck} />
              <Text style={styles.stepText}>Water and level the bed</Text>
            </View>
          </View>
        </View>
      );
    case "video":
      return (
        <View style={styles.genericCardScreen}>
          <Text style={styles.panelTitle}>Watch the demonstration</Text>
          <View style={styles.videoPlaceholder}>
            <View style={styles.playButton} />
          </View>
          <View style={styles.videoMeta}>
            <Text style={styles.metaTitle}>Preparing Nursery Bed</Text>
            <Text style={styles.metaSmall}>8 min • Beginner</Text>
          </View>
          <View style={styles.stepList}>
            <View style={styles.stepRow}>
              <View style={styles.stepBullet} />
              <Text style={styles.stepText}>Clear the area</Text>
            </View>
            <View style={styles.stepRow}>
              <View style={styles.stepBullet} />
              <Text style={styles.stepText}>Mix in organic matter</Text>
            </View>
            <View style={styles.stepRow}>
              <View style={styles.stepBullet} />
              <Text style={styles.stepText}>Water evenly</Text>
            </View>
          </View>
        </View>
      );
    case "practice":
      return (
        <View style={styles.genericCardScreen}>
          <Text style={styles.panelTitle}>Practice</Text>
          <Text style={styles.lessonStage}>Your tasks</Text>
          <View style={styles.practiceBox}>
            <Text style={styles.practiceText}>1. Mark the area</Text>
            <Text style={styles.practiceText}>2. Mix compost with soil</Text>
            <Text style={styles.practiceText}>3. Water the bed</Text>
          </View>
          <View style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Continue</Text>
          </View>
        </View>
      );
    case "tracking":
      return (
        <View style={styles.genericCardScreen}>
          <Text style={styles.panelTitle}>My Farm</Text>
          <View style={styles.trackingRow}>
            <View style={styles.miniRing}>
              <Text style={styles.ringSmall}>35%</Text>
            </View>
            <View style={styles.trackingMeta}>
              <Text style={styles.metaTitle}>Overall progress</Text>
              <Text style={styles.metaSmall}>12 of 24 stages</Text>
            </View>
          </View>
          <View style={styles.taskList}>
            <Text style={styles.taskLabel}>Activities</Text>
            <Text style={styles.taskLabel}>Lessons 3 / 8</Text>
            <Text style={styles.taskLabel}>Practice 2 / 8</Text>
            <Text style={styles.taskLabel}>Complete 2 / 8</Text>
          </View>
        </View>
      );
    case "harvest":
      return (
        <View style={styles.genericCardScreen}>
          <Text style={styles.panelTitle}>Harvest</Text>
          <Text style={styles.lessonStage}>This season</Text>
          <View style={styles.harvestStat}>
            <Text style={styles.bigNumber}>120 kg</Text>
            <Text style={styles.metaSmall}>Total harvested</Text>
          </View>
          <View style={styles.chartBars}>
            {[35, 56, 70, 52, 60, 80].map((height, index) => (
              <View key={index} style={[styles.chartBar, { height }]} />
            ))}
          </View>
          <View style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>View all</Text>
          </View>
        </View>
      );
    case "market":
      return (
        <View style={styles.genericCardScreen}>
          <Text style={styles.panelTitle}>Sales</Text>
          <Text style={styles.lessonStage}>This season</Text>
          <View style={styles.salesStats}>
            <Text style={styles.salesValue}>$340</Text>
            <Text style={styles.metaSmall}>Total sold</Text>
          </View>
          <View style={styles.salesRows}>
            <Text style={styles.saleLine}>Main crop $150</Text>
            <Text style={styles.saleLine}>Local market $90</Text>
            <Text style={styles.saleLine}>Wholesale $100</Text>
          </View>
        </View>
      );
    case "profit":
      return (
        <View style={styles.genericCardScreen}>
          <Text style={styles.panelTitle}>Profit</Text>
          <Text style={styles.lessonStage}>This season</Text>
          <View style={styles.profitRow}>
            <Text style={styles.profitLabel}>Total sales</Text>
            <Text style={styles.profitValue}>$340</Text>
          </View>
          <View style={styles.profitRow}>
            <Text style={styles.profitLabel}>Total costs</Text>
            <Text style={styles.profitValue}>$220</Text>
          </View>
          <View style={styles.profitRow}>
            <Text style={styles.profitLabel}>Net profit</Text>
            <Text style={styles.profitValue}>$120</Text>
          </View>
          <View style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>View report</Text>
          </View>
        </View>
      );
    case "settings":
      return (
        <View style={styles.genericCardScreen}>
          <Text style={styles.panelTitle}>Settings</Text>
          <View style={styles.settingsList}>
            <Text style={styles.settingLine}>Notifications</Text>
            <Text style={styles.settingLine}>Language</Text>
            <Text style={styles.settingLine}>Data & sync</Text>
            <Text style={styles.settingLine}>Privacy</Text>
            <Text style={styles.settingLine}>About FarmPath</Text>
          </View>
        </View>
      );
    case "voice":
      return (
        <View style={styles.genericCardScreen}>
          <Text style={styles.panelTitle}>AI Farm Assistant</Text>
          <View style={styles.voiceOrb}>
            <Text style={styles.voiceText}>◉</Text>
          </View>
          <Text style={styles.lessonBody}>
            How can I help with your crop care today?
          </Text>
          <View style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Ask a question</Text>
          </View>
        </View>
      );
    case "recommend":
      return (
        <View style={styles.genericCardScreen}>
          <Text style={styles.panelTitle}>Recommendations</Text>
          <View style={styles.recoCard}>
            <Text style={styles.metaTitle}>Apply organic fertilizer</Text>
            <Text style={styles.metaSmall}>In 3 days</Text>
          </View>
          <View style={styles.recoCard}>
            <Text style={styles.metaTitle}>Check pest levels</Text>
            <Text style={styles.metaSmall}>Tomorrow</Text>
          </View>
          <View style={styles.recoCard}>
            <Text style={styles.metaTitle}>Water your plants</Text>
            <Text style={styles.metaSmall}>Today</Text>
          </View>
        </View>
      );
    case "success":
      return (
        <View style={styles.genericCardScreen}>
          <Text style={styles.panelTitle}>Success</Text>
          <View style={styles.successBadge}>
            <Text style={styles.successText}>✓</Text>
          </View>
          <Text style={styles.lessonBody}>
            Your crop plan has been saved and your next task is ready.
          </Text>
          <View style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>View details</Text>
          </View>
        </View>
      );
    case "empty":
      return (
        <View style={styles.genericCardScreen}>
          <Text style={styles.panelTitle}>No data yet</Text>
          <Text style={styles.lessonBody}>
            Start tracking your farm to unlock insights and recommendations.
          </Text>
          <View style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Start now</Text>
          </View>
        </View>
      );
    default:
      return null;
  }
}

export function DesignBoard() {
  return (
    <View style={styles.boardShell}>
      <ScrollView contentContainerStyle={styles.boardContent}>
        {screens.map((screen) => (
          <PhoneFrame key={screen}>{renderLanding(screen)}</PhoneFrame>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  boardShell: {
    flex: 1,
    backgroundColor: "#eef4ec",
  },
  boardContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 14,
    padding: 16,
  },
  phoneShell: {
    width: 176,
    height: 360,
    backgroundColor: "#f8f6f0",
    borderRadius: 28,
    borderWidth: 1,
    borderColor: "#d9e5d8",
    shadowColor: "#0c3b30",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    overflow: "hidden",
  },
  statusBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#173531",
  },
  statusIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  signal: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#183f39",
    opacity: 0.7,
  },
  battery: {
    width: 16,
    height: 8,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#183f39",
    backgroundColor: "#eaf2ea",
  },
  screenArea: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  homeIndicator: {
    position: "absolute",
    bottom: 6,
    left: "50%",
    width: 56,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#cdd9cf",
    marginLeft: -28,
  },
  splashScreen: {
    flex: 1,
    backgroundColor: "#103d2d",
    paddingHorizontal: 14,
    paddingTop: 20,
    borderRadius: 22,
    overflow: "hidden",
  },
  foliageTop: {
    position: "absolute",
    inset: 0,
    backgroundColor: "#0f5a39",
    opacity: 0.55,
  },
  foliageBottom: {
    position: "absolute",
    left: -10,
    right: -10,
    bottom: -10,
    height: 140,
    backgroundColor: "#2a7b4c",
    borderRadius: 120,
    opacity: 0.8,
  },
  brandBlock: {
    marginTop: 28,
    alignItems: "center",
    zIndex: 2,
  },
  logoMark: {
    width: 52,
    height: 52,
    marginBottom: 10,
    position: "relative",
  },
  leaf: {
    position: "absolute",
    backgroundColor: "#f5f7ee",
    borderRadius: 18,
  },
  leftLeaf: {
    width: 22,
    height: 32,
    left: 6,
    top: 18,
    transform: [{ rotate: "-32deg" }],
  },
  rightLeaf: {
    width: 22,
    height: 34,
    right: 8,
    top: 7,
    transform: [{ rotate: "32deg" }],
  },
  brandTitle: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "800",
  },
  brandTag: {
    marginTop: 6,
    color: "#edf7ef",
    fontSize: 10,
    fontWeight: "600",
  },
  ctaButton: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 42,
    height: 42,
    backgroundColor: "#f3f7ef",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  ctaText: {
    color: "#0c3d2d",
    fontSize: 13,
    fontWeight: "700",
  },
  paginationRow: {
    position: "absolute",
    bottom: 16,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    gap: 7,
    zIndex: 2,
  },
  paginationActive: {
    width: 18,
    height: 4,
    borderRadius: 4,
    backgroundColor: "#ffffff",
  },
  paginationDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "rgba(255,255,255,0.7)",
  },
  genericScreen: {
    flex: 1,
    backgroundColor: "#f8f7ed",
    paddingHorizontal: 18,
    paddingTop: 18,
    borderRadius: 22,
  },
  smallBrand: {
    alignSelf: "center",
    color: "#0d3d2d",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 12,
  },
  heroTitle: {
    color: "#0d3d2d",
    fontSize: 26,
    lineHeight: 30,
    fontWeight: "800",
    marginBottom: 8,
  },
  heroText: {
    color: "#3b5d52",
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 12,
  },
  farmArtwork: {
    flex: 1,
    minHeight: 160,
    justifyContent: "flex-end",
    position: "relative",
    marginBottom: 12,
  },
  hillOne: {
    position: "absolute",
    width: 150,
    height: 72,
    left: -12,
    top: 28,
    borderRadius: 70,
    backgroundColor: "#dce7d2",
    transform: [{ rotate: "-8deg" }],
  },
  hillTwo: {
    position: "absolute",
    width: 150,
    height: 74,
    right: -18,
    top: 42,
    borderRadius: 70,
    backgroundColor: "#bfd8b1",
    transform: [{ rotate: "8deg" }],
  },
  farmScene: {
    width: "100%",
    height: 120,
    borderRadius: 18,
    backgroundColor: "#dfe8d4",
    borderWidth: 1,
    borderColor: "#d1dbca",
  },
  primaryButton: {
    height: 42,
    backgroundColor: "#0e6b47",
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "700",
  },
  smallLink: {
    color: "#1b4a38",
    fontSize: 11,
    fontWeight: "600",
    marginTop: 10,
    alignSelf: "center",
  },
  authScreen: {
    flex: 1,
    backgroundColor: "#f7f2e8",
    paddingHorizontal: 18,
    paddingTop: 18,
    borderRadius: 22,
  },
  formTitle: {
    color: "#0b3d2d",
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 6,
  },
  formSubtitle: {
    color: "#4d6d62",
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 14,
  },
  inputRows: {
    gap: 10,
    marginBottom: 12,
  },
  inputLine: {
    height: 40,
    borderRadius: 12,
    backgroundColor: "#edf3ed",
    borderWidth: 1,
    borderColor: "#dbe5dc",
  },
  linkInline: {
    alignSelf: "flex-end",
    marginTop: 4,
    marginBottom: 14,
    color: "#0d6b48",
    fontSize: 11,
    fontWeight: "700",
  },
  dividerRow: {
    marginTop: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#d7ddd6",
  },
  orText: {
    fontSize: 11,
    color: "#5d766d",
    fontWeight: "600",
  },
  socialRow: {
    height: 38,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#dfeae3",
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 8,
  },
  socialIcon: {
    color: "#0c3d2d",
    fontWeight: "800",
    fontSize: 15,
  },
  socialText: {
    color: "#163d35",
    fontSize: 12,
    fontWeight: "600",
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    marginTop: 14,
  },
  footerText: {
    fontSize: 11,
    color: "#617b6e",
  },
  footerLink: {
    fontSize: 11,
    color: "#0d6b48",
    fontWeight: "700",
  },
  dashboardScreen: {
    flex: 1,
    backgroundColor: "#f5f0e8",
    paddingHorizontal: 14,
    paddingTop: 18,
    borderRadius: 22,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  greeting: {
    color: "#2a5a4d",
    fontSize: 12,
    fontWeight: "600",
  },
  name: {
    color: "#0c3c30",
    fontSize: 24,
    fontWeight: "800",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#dfe9df",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 13,
    fontWeight: "800",
    color: "#0d3d2d",
  },
  progressPanel: {
    backgroundColor: "#eaf5ec",
    borderRadius: 24,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  ringWrap: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: "#dbe7cf",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  ringInner: {
    position: "absolute",
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 7,
    borderColor: "#0f6a49",
    borderTopColor: "#dfe9df",
    transform: [{ rotate: "-30deg" }],
  },
  ringText: {
    color: "#0d3d2d",
    fontSize: 15,
    fontWeight: "800",
  },
  ringMeta: {
    flex: 1,
  },
  metaTitle: {
    color: "#0d3d2d",
    fontSize: 12,
    fontWeight: "700",
  },
  metaValue: {
    color: "#0d3d2d",
    fontSize: 18,
    fontWeight: "800",
    marginTop: 2,
  },
  metaSmall: {
    color: "#516d62",
    fontSize: 10,
    fontWeight: "600",
    marginTop: 2,
  },
  taskList: {
    marginTop: 14,
    gap: 8,
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  taskDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#cfe4d2",
    alignItems: "center",
    justifyContent: "center",
  },
  taskDotDone: {
    backgroundColor: "#0d6b48",
  },
  checkmark: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "800",
  },
  taskLabel: {
    color: "#173b32",
    fontSize: 12,
    fontWeight: "700",
  },
  taskLabelMuted: {
    color: "#5e786f",
    fontWeight: "600",
  },
  nextItem: {
    marginTop: 18,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: "#dfe8e0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nextText: {
    color: "#123b2d",
    fontSize: 12,
    fontWeight: "700",
  },
  arrow: {
    fontSize: 18,
    color: "#0b5f3f",
  },
  navBar: {
    marginTop: 18,
    backgroundColor: "#edf8ee",
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navActive: {
    color: "#ffffff",
    backgroundColor: "#0f6b47",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 10,
    fontWeight: "700",
  },
  navLabel: {
    color: "#5f756b",
    fontSize: 10,
    fontWeight: "600",
    paddingVertical: 6,
  },
  genericCardScreen: {
    flex: 1,
    backgroundColor: "#f8f7ed",
    paddingHorizontal: 14,
    paddingTop: 18,
    borderRadius: 22,
  },
  panelTitle: {
    color: "#0c3d2d",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 4,
  },
  cropGrid: {
    gap: 8,
    marginTop: 8,
    marginBottom: 12,
  },
  cropCard: {
    backgroundColor: "#edf6ec",
    borderRadius: 14,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  cropThumb: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: "#8dc16b",
  },
  cropThumbAlt: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: "#b5d78a",
  },
  cropThumbAlt2: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: "#9cc48b",
  },
  cropThumbAlt3: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: "#7abd7a",
  },
  cropText: {
    color: "#174a39",
    fontSize: 11,
    fontWeight: "700",
  },
  lessonStage: {
    color: "#4d6d62",
    fontSize: 10,
    fontWeight: "700",
    marginBottom: 8,
  },
  lessonImage: {
    height: 110,
    borderRadius: 16,
    backgroundColor: "#dfecc9",
    marginBottom: 10,
  },
  lessonBody: {
    color: "#204b3b",
    fontSize: 11,
    lineHeight: 17,
    marginBottom: 10,
  },
  stepList: {
    gap: 8,
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepCheck: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#0e6b47",
  },
  stepBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#7ea379",
  },
  stepText: {
    color: "#174a39",
    fontSize: 11,
    fontWeight: "600",
  },
  videoPlaceholder: {
    height: 120,
    borderRadius: 16,
    backgroundColor: "#dfe9c6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  playButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#ffffff",
    opacity: 0.9,
    borderWidth: 1,
    borderColor: "#dfe8d8",
  },
  videoMeta: {
    marginBottom: 8,
  },
  trackingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  miniRing: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#e1efd5",
    alignItems: "center",
    justifyContent: "center",
  },
  ringSmall: {
    color: "#0d3d2d",
    fontSize: 12,
    fontWeight: "800",
  },
  trackingMeta: {
    flex: 1,
  },
  harvestStat: {
    backgroundColor: "#edf8ee",
    borderRadius: 16,
    padding: 12,
    marginBottom: 10,
  },
  bigNumber: {
    color: "#0d3d2d",
    fontSize: 30,
    fontWeight: "800",
  },
  chartBars: {
    height: 68,
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
    marginBottom: 12,
  },
  chartBar: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: "#6ab075",
  },
  salesStats: {
    backgroundColor: "#edf5ed",
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
  },
  salesValue: {
    fontSize: 26,
    fontWeight: "800",
    color: "#0d3d2d",
  },
  salesRows: {
    gap: 6,
  },
  saleLine: {
    fontSize: 11,
    color: "#1d4d3d",
    fontWeight: "600",
  },
  profitRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#e1e7df",
  },
  profitLabel: {
    fontSize: 11,
    color: "#4b6d62",
    fontWeight: "600",
  },
  profitValue: {
    fontSize: 12,
    color: "#0d3d2d",
    fontWeight: "800",
  },
  settingsList: {
    gap: 10,
    marginTop: 8,
  },
  settingLine: {
    fontSize: 12,
    color: "#1a453a",
    fontWeight: "600",
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e6df",
  },
  voiceOrb: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#dfeec3",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  voiceText: {
    fontSize: 30,
    color: "#0d3d2d",
  },
  recoCard: {
    backgroundColor: "#edf6ed",
    borderRadius: 12,
    padding: 10,
    marginBottom: 8,
  },
  successBadge: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#dfeecf",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 12,
  },
  successText: {
    color: "#0d6b48",
    fontSize: 28,
    fontWeight: "800",
  },
  practiceBox: {
    backgroundColor: "#edf6ed",
    borderRadius: 14,
    padding: 12,
    marginBottom: 12,
    gap: 8,
  },
  practiceText: {
    color: "#1d4b3f",
    fontSize: 11,
    fontWeight: "600",
  },
});
