<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M15.5 17c0 1 1.5 3 2 3c1.5 0 2.83 -1.67 3.5 -3c0.67 -1.67 0.5 -5.83 -1.5 -11.5c-1.46 -1.01 -3 -1.34 -4.5 -1.5l-0.97 1.92a11.91 11.91 0 0 0 -4.05 0l-0.97 -1.92c-1.5 0.16 -3.04 0.49 -4.5 1.5c-2 5.67 -2.17 9.83 -1.5 11.5c0.67 1.33 2 3 3.5 3c0.5 0 2 -2 2 -3"}],["path",{"d":"M7 16.5c3.5 1 6.5 1 10 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
