<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.04 21.73l-0.24 0.1c-0.51 0.22 -1.09 0.22 -1.6 0l-5.57 -2.39a2.04 2.04 0 0 1 -1.07 -1.07l-2.39 -5.57a2.04 2.04 0 0 1 0 -1.6l2.39 -5.57c0.21 -0.48 0.59 -0.86 1.07 -1.07l5.57 -2.39a2.04 2.04 0 0 1 1.6 0l5.58 2.39c0.48 0.21 0.86 0.59 1.07 1.07l2.39 5.57c0.22 0.51 0.22 1.09 0 1.6l-0.94 2.2"}],["path",{"d":"M16 19h6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
