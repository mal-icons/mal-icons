<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 7 6 2"}],["path",{"d":"M18.99 12H2.04"}],["path",{"d":"M21.15 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.14 1.88c-0.570.46-0.85 1.02-0.85 1.6A2 2 0 0 0 20 22a2 2 0 0 0 2-2.02c0-0.58-0.28-1.13-0.85-1.59"}],["path",{"d":"m8.5 4.5 2.15-2.15a1.21 1.21 0 0 1 1.7 0l7.3 7.3a1.21 1.21 0 0 1 0 1.7l-7.59 7.59a3.62 3.62 0 0 1-5.11 0l-3.89-3.89a3.62 3.62 0 0 1 0-5.11L5.67 7.33"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
