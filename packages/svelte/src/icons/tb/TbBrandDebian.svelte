<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 17c-2.4 -0.94 -4 -3.15 -4 -5.63c0 -2.19 1.04 -3.14 1.6 -3.59c2.65 -2.13 6.4 -0.27 6.4 3.23c0 2.5 -2.9 2.12 -3.5 1.5c-0.59 -0.62 -1 -1.5 -0.5 -2.5"}],["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
