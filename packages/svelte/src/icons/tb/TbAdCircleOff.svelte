<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.91 4.95a9.97 9.97 0 0 0 -2.91 7.05c0 5.52 4.48 10 10 10a9.97 9.97 0 0 0 7.05 -2.91"}],["path",{"d":"M20.78 16.79a9.96 9.96 0 0 0 1.22 -4.79c0 -5.52 -4.48 -10 -10 -10c-1.74 0 -3.38 0.44 -4.8 1.23"}],["path",{"d":"M7 15v-4.5a1.5 1.5 0 0 1 2.14 -1.36"}],["path",{"d":"M9.85 9.85c0.09 0.2 0.15 0.42 0.15 0.65v4.5"}],["path",{"d":"M7 13h3"}],["path",{"d":"M14 14v1h1"}],["path",{"d":"M17 13v-2a2 2 0 0 0 -2 -2h-1v1"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
