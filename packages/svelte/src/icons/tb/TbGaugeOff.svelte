<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.04 16.05a9 9 0 0 0 -12.07 -12.1m-2.33 1.69a9 9 0 1 0 12.73 12.73"}],["path",{"d":"M11.28 11.3a1 1 0 0 0 1.42 1.41"}],["path",{"d":"M14 10l2 -2"}],["path",{"d":"M7 12c0 -1.39 0.56 -2.64 1.48 -3.55m2.62 -1.37c0.29 -0.05 0.6 -0.08 0.91 -0.08"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
