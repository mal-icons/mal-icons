<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 19l3.03 1.75a2 2 0 0 0 1.94 0l6 -3.84a2 2 0 0 0 1.03 -1.75v-6.15l-8 3l-8 3v-6.4c0 -0.73 0.39 -1.4 1.03 -1.75l6 -3.58a2.05 2.05 0 0 1 2 0l2.97 1.74"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
