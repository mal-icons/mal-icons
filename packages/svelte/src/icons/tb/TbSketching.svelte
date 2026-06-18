<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 15c2 -4.97 7.36 -11 9 -11c4.25 0 -5.5 11.96 -3 13s5.65 -6.68 7.4 -5.9c1.75 0.78 -1.05 7.59 -0.3 8.63s3.15 -0.9 3.9 -2.73"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
