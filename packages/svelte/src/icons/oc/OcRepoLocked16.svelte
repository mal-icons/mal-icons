<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a0.750.75 0 0 1 0.750.75v3.5a0.750.75 0 0 1-1.5 0V1.5h-8a1 1 0 0 0-1 1v6.71A2.49 2.49 0 0 1 4.5 9h1.75a0.750.75 0 0 1 0 1.5H4.5a1 1 0 1 0 0 2h1.75a0.750.75 0 0 1 0 1.5H4.5A2.5 2.5 0 0 1 2 11.5v-9Z"}],["path",{"d":"M9 10.17V9a3 3 0 1 1 6 0v1.17c0.590.28 1 0.88 1 1.58v2.5A1.75 1.75 0 0 1 14.25 16h-4.5A1.75 1.75 0 0 1 8 14.25v-2.5c0-0.70.41-1.3 1-1.58ZM13.5 10V9a1.5 1.5 0 0 0-3 0v1Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
