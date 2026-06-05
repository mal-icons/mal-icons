import { IconContext } from "@mal-icon/react-native";
import * as Clipboard from "expo-clipboard";
import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import { Linking, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { FiCheck, FiCopy, FiGithub, FiSearch, ICONS } from "./src/icons";

const SIZES = [20, 28, 36, 48] as const;
const COLORS = ["#6366f1", "#ec4899", "#10b981", "#f59e0b", "#e2e8f0"] as const;

export default function App() {
  const [size, setSize] = useState<number>(28);
  const [color, setColor] = useState<string>("#6366f1");
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ICONS;
    return ICONS.filter(([name]) => name.toLowerCase().includes(q));
  }, [query]);

  async function copyImport(name: string) {
    await Clipboard.setStringAsync(`import { ${name} } from "@mal-icon/react-native/fi";`);
    setCopied(name);
    setTimeout(() => setCopied((c) => (c === name ? null : c)), 1200);
  }

  return (
    <IconContext.Provider value={{ size, color }}>
      <StatusBar style="light" />
      <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <Text style={styles.badge}>React Native · Expo</Text>
          <Text style={styles.title}>mal-icon for React Native</Text>
          <Text style={styles.subtitle}>
            Tree-shakeable icon components built on react-native-svg. Theming flows through a single
            IconContext — no DOM, no runtime string parsing.
          </Text>
          <Pressable
            style={styles.link}
            onPress={() => Linking.openURL("https://github.com/MAnasLatif/mal-icon")}
          >
            <FiGithub size={18} />
            <Text style={styles.linkText}>View on GitHub</Text>
          </Pressable>
        </View>

        <View style={styles.panel}>
          <View style={styles.search}>
            <FiSearch size={18} color="#94a3b8" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search icons…"
              placeholderTextColor="#64748b"
              value={query}
              onChangeText={setQuery}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <Text style={styles.fieldLabel}>Size · {size}px</Text>
          <View style={styles.row}>
            {SIZES.map((s) => (
              <Pressable
                key={s}
                style={[styles.chip, s === size && styles.chipActive]}
                onPress={() => setSize(s)}
              >
                <Text style={[styles.chipText, s === size && styles.chipTextActive]}>{s}</Text>
              </Pressable>
            ))}
          </View>

          <Text style={styles.fieldLabel}>Color</Text>
          <View style={styles.row}>
            {COLORS.map((c) => (
              <Pressable
                key={c}
                style={[styles.swatch, { backgroundColor: c }, c === color && styles.swatchActive]}
                onPress={() => setColor(c)}
              />
            ))}
          </View>
        </View>

        <View style={styles.grid}>
          {filtered.map(([name, Icon]) => (
            <Pressable key={name} style={styles.card} onPress={() => copyImport(name)}>
              <View style={styles.cardIcon}>
                <Icon title={name} />
              </View>
              <Text style={styles.cardName} numberOfLines={1}>
                {name}
              </Text>
              <View style={styles.cardCopy}>
                {copied === name ? (
                  <>
                    <FiCheck size={13} color="#10b981" />
                    <Text style={styles.cardCopyText}>Copied</Text>
                  </>
                ) : (
                  <>
                    <FiCopy size={13} color="#94a3b8" />
                    <Text style={styles.cardCopyText}>Copy</Text>
                  </>
                )}
              </View>
            </Pressable>
          ))}
          {filtered.length === 0 ? (
            <Text style={styles.empty}>No icons match “{query}”.</Text>
          ) : null}
        </View>

        <Text style={styles.footer}>
          Showing {filtered.length} of {ICONS.length} curated Feather icons. The full set ships 287
          tree-shakeable components.
        </Text>
      </ScrollView>
    </IconContext.Provider>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#0b0d12" },
  content: { padding: 20, paddingTop: 64, gap: 20 },
  hero: { gap: 10 },
  badge: {
    alignSelf: "flex-start",
    color: "#a5b4fc",
    backgroundColor: "#1e1b4b",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 5,
    fontSize: 12,
    fontWeight: "600",
    overflow: "hidden",
  },
  title: { color: "#f8fafc", fontSize: 28, fontWeight: "800" },
  subtitle: { color: "#94a3b8", fontSize: 14, lineHeight: 21 },
  link: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    alignSelf: "flex-start",
    marginTop: 4,
    backgroundColor: "#1e293b",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  linkText: { color: "#e2e8f0", fontWeight: "600" },
  panel: {
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#0b0d12",
    borderRadius: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  searchInput: { flex: 1, color: "#f8fafc", paddingVertical: 10 },
  fieldLabel: { color: "#cbd5e1", fontSize: 13, fontWeight: "600" },
  row: { flexDirection: "row", alignItems: "center", gap: 8 },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#0b0d12",
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  chipActive: { backgroundColor: "#6366f1", borderColor: "#6366f1" },
  chipText: { color: "#cbd5e1", fontWeight: "600" },
  chipTextActive: { color: "#fff" },
  swatch: { width: 32, height: 32, borderRadius: 999, borderWidth: 2, borderColor: "transparent" },
  swatchActive: { borderColor: "#f8fafc" },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  card: {
    width: 104,
    alignItems: "center",
    gap: 8,
    paddingVertical: 16,
    borderRadius: 14,
    backgroundColor: "#111827",
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  cardIcon: { height: 48, justifyContent: "center" },
  cardName: { color: "#e2e8f0", fontSize: 11, maxWidth: 92 },
  cardCopy: { flexDirection: "row", alignItems: "center", gap: 4 },
  cardCopyText: { color: "#94a3b8", fontSize: 11 },
  empty: { color: "#94a3b8", padding: 16 },
  footer: { color: "#64748b", fontSize: 12, lineHeight: 18 },
});
