<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21.5 12.91l0.21 -0.21a0.98 0.98 0 0 0 0 -1.41l-8.85 -8.95a1.23 1.23 0 0 0 -1.72 0l-8.85 8.95a0.98 0.98 0 0 0 0 1.41l8.85 8.95a1.23 1.23 0 0 0 1.72 0l0.08 -0.08"}],["path",{"d":"M2 12c0 0.09 0.1 0.18 0.3 0.25l8.85 2.63c0.46 0.16 1.26 0.16 1.72 0l2.63 -0.78m5.41 -1.61l0.8 -0.24c0.2 -0.07 0.29 -0.16 0.3 -0.24"}],["path",{"d":"M12 2.12v19.76"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16v6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
