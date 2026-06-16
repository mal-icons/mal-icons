<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22.17 9.17c0-3.87-3.13-7-7-7s-7 3.13-7 7A6.98 6.98 0 0 0 14 16.06V20H6v-3h1v-4c0-0.55-0.45-1-1-1H3c-0.55 0-1 0.45-1 1v4h1v5h16v-2h-3v-3.88a7 7 0 0 0 6.17-6.95zM4.5 11c0.83 0 1.5-0.67 1.5-1.5S5.33 8 4.5 8 3 8.67 3 9.5 3.67 11 4.5 11z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
