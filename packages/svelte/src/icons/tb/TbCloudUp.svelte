<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 18h-5.34c-2.57 0 -4.66 -2.01 -4.66 -4.49c0 -2.47 2.09 -4.48 4.66 -4.48c0.39 -1.76 1.79 -3.2 3.68 -3.77c1.88 -0.57 3.96 -0.19 5.44 1c1.49 1.19 2.16 3.01 1.77 4.77h0.99c1.38 0 2.57 0.81 3.13 1.99"}],["path",{"d":"M19 22v-6"}],["path",{"d":"M22 19l-3 -3l-3 3"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
