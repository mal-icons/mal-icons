<script setup lang="ts">
import { provideIconContext } from "@mal-icons/vue";
import { FiActivity, FiGlobe, FiSearch, FiZap, ICONS } from "~/icons";

// Nuxt's `useState` keeps the controls SSR-safe: the values are serialized on
// the server and hydrated on the client without a mismatch.
const size = useState("icon-size", () => 32);
const color = useState("icon-color", () => "#00dc82");
const query = useState("icon-query", () => "");

// A reactive context object — updating its fields re-themes every descendant
// icon. Provided once here so the whole app (hero + gallery) shares it.
const iconContext = reactive({ size, color });
provideIconContext(iconContext as never);

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return ICONS;
  return ICONS.filter((i) => i.name.toLowerCase().includes(q));
});
</script>

<template>
  <div class="page">
    <header class="hero">
      <div class="hero__badge">Nuxt 3 · Vue 3.5 · SSR</div>
      <h1 class="hero__title">mal-icons <span>for Nuxt</span></h1>
      <p class="hero__subtitle">
        The hero icons below are rendered on the server as native
        <code>&lt;svg&gt;</code> markup — no <code>v-html</code>, no runtime JSON
        parsing — then hydrated. Theme everything through
        <code>provideIconContext</code>.
      </p>
      <div class="hero__row" aria-label="Server-rendered icons">
        <FiActivity :size="40" color="#6366f1" title="Activity" />
        <FiZap :size="40" color="#22d3ee" title="Zap" />
        <FiGlobe :size="40" color="#f472b6" title="Globe" />
      </div>
    </header>

    <section class="panel" aria-label="Icon controls">
      <label class="field field--search">
        <FiSearch :size="18" class="field__icon" />
        <input v-model="query" type="search" placeholder="Search icons…" />
      </label>

      <label class="field">
        <span>Size · {{ size }}px</span>
        <input v-model.number="size" type="range" min="16" max="64" />
      </label>

      <label class="field">
        <span>Color</span>
        <input v-model="color" type="color" />
      </label>
    </section>

    <main class="grid" aria-label="Icon gallery">
      <div v-for="icon in filtered" :key="icon.name" class="card">
        <span class="card__icon">
          <component :is="icon.comp" :title="icon.name" />
        </span>
        <span class="card__name">{{ icon.name }}</span>
      </div>

      <p v-if="filtered.length === 0" class="empty">
        No icons match “{{ query }}”.
      </p>
    </main>

    <footer class="footer">
      Showing {{ filtered.length }} of {{ ICONS.length }} curated Feather icons,
      server-rendered with <code>@mal-icons/vue</code>.
    </footer>
  </div>
</template>
