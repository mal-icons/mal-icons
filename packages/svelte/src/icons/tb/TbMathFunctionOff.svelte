<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 10h1c0.88 0 0.99 0.78 1.69 2.69"}],["path",{"d":"M13 17c0.86 0 1.73 -0.66 2.5 -1.51m1.72 -2.3c0.99 -1.45 2.39 -3.19 3.79 -3.19"}],["path",{"d":"M3 19c0 1.5 0.5 2 2 2s2 -4 3 -9c0.24 -1.19 0.45 -2.32 0.65 -3.35m0.73 -3.25c0.42 -1.49 0.91 -2.4 1.63 -2.4c1.5 0 2 0.5 2 2"}],["path",{"d":"M5 12h6"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
