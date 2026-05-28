<script lang="ts">
  import { setIconContext } from "@mal-icon/svelte";
  import { ICONS, FiSearch } from "./icons";

  let query = $state("");

  // Theming context. The library resolves theme at component init, so we
  // re-key the grid below to re-apply changes to already-rendered icons.
  const ctx = $state<{ size: number; color: string }>({
    size: 32,
    color: "#f59e0b",
  });
  setIconContext(ctx as never);

  const filtered = $derived(
    query.trim()
      ? ICONS.filter((i) =>
          i.name.toLowerCase().includes(query.trim().toLowerCase()),
        )
      : ICONS,
  );
</script>

<div class="page">
  <header class="hero">
    <div class="hero__badge">Svelte 5 · Vite</div>
    <h1 class="hero__title">mal-icon <span>for Svelte</span></h1>
    <p class="hero__subtitle">
      Each icon is a precompiled <code>.svelte</code> component. Theme them
      through <code>setIconContext</code> and Svelte 5 runes.
    </p>
  </header>

  <section class="panel" aria-label="Icon controls">
    <label class="field field--search">
      <span class="field__icon"><FiSearch size={18} /></span>
      <input type="search" placeholder="Search icons…" bind:value={query} />
    </label>

    <label class="field">
      <span>Size · {ctx.size}px</span>
      <input type="range" min="16" max="64" bind:value={ctx.size} />
    </label>

    <label class="field">
      <span>Color</span>
      <input type="color" bind:value={ctx.color} />
    </label>
  </section>

  <main class="grid" aria-label="Icon gallery">
    {#key `${ctx.size}-${ctx.color}`}
      {#each filtered as icon (icon.name)}
        {@const Comp = icon.comp}
        <div class="card">
          <span class="card__icon"><Comp title={icon.name} /></span>
          <span class="card__name">{icon.name}</span>
        </div>
      {/each}
    {/key}

    {#if filtered.length === 0}
      <p class="empty">No icons match “{query}”.</p>
    {/if}
  </main>

  <footer class="footer">
    Showing {filtered.length} of {ICONS.length} curated Feather icons.
  </footer>
</div>
