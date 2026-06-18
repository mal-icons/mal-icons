<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 10.94c2.33 -3.31 0.17 -7.82 -1 -8.94c0 3.4 -2.23 5.3 -3.67 6.71c-1.43 1.41 -2.33 3.29 -2.33 5.59c0 3.7 3.13 6.71 7 6.71c3.87 0 7 -3 7 -6.71c0 -1.71 -1.23 -4.4 -2.33 -5.59c-2.08 3.35 -3.26 3.35 -4.67 2.24"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
