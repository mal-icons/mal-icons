<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 21s9.29 -9.84 9.29 -13.84a3.86 3.86 0 0 0 -1.18 -3.01a4.13 4.13 0 0 0 -3.1 -1.14a4.13 4.13 0 0 0 -3.1 1.14a3.86 3.86 0 0 0 -1.18 3.01c0 4 9.29 13.84 9.29 13.84"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
