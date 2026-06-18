<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.13 0H4.88A4.87 4.87 0 0 0 0 4.88v14.25C0 21.83 2.17 24 4.88 24h6.6c2.7 0 4.88-2.17 4.88-4.87V16.65h2.78c2.7 0 4.88-2.17 4.88-4.87v-6.9C24 2.17 21.83 0 19.13 0zM16.5 1.27h2.63a3.6 3.6 0 0 1 3.6 3.6v2.7H16.5v-6.3zM15.08 9v6.45H8.85V9h6.23zM8.85 1.2h6.23v6.38H8.85V1.2zM1.27 4.8a3.6 3.6 0 0 1 3.6-3.6H7.5v6.38H1.27V4.8zM7.5 9v6.45H1.2V9h6.3zm0 13.73H4.8a3.6 3.6 0 0 1-3.6-3.6V16.8h6.3v5.93zm7.58-3.52a3.6 3.6 0 0 1-3.6 3.6H8.85v-5.92h6.23V19.2zm7.65-7.35a3.6 3.6 0 0 1-3.6 3.6H16.5V9h6.23v2.85z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
