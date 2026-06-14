<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.75 7.09a3 3 0 0 1 2.16 2.16"}],["path",{"d":"M17.07 17.07c-1.63 2.17-3.53 3.91-4.47 4.73a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 1.43-4.57"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M8.48 2.82A8 8 0 0 1 20 10c0 1.18-0.31 2.38-0.81 3.53"}],["path",{"d":"M9.13 9.13a3 3 0 0 0 3.74 3.74"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
