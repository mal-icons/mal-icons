<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 4.5l6 -1.5l-2 6.5l2 -0.5l-4 7v-5l-3 1l1 -7.5"}],["path",{"d":"M15 6.5l7 -1.5l-10 17l-10 -17l7.74 1.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
