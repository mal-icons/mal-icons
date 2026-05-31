<script setup lang="ts">
import { provideIconContext } from "@mal-icons/vue";
import { computed, reactive, ref } from "vue";
import { FiSearch, ICONS } from "./icons";

const size = ref(32);
const color = ref("#22c55e");
const query = ref("");

// A reactive context object — updating its fields re-themes every icon.
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
      <div class="hero__badge">Vue 3.5 · Vite</div>
      <h1 class="hero__title">mal-icons <span>for Vue</span></h1>
      <p class="hero__subtitle">
        The same ahead-of-time generated icons, rendered with Vue's
        <code>h()</code> render functions. Theme everything through
        <code>provideIconContext</code>.
      </p>
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
      Showing {{ filtered.length }} of {{ ICONS.length }} curated Feather icons.
    </footer>
  </div>
</template>
