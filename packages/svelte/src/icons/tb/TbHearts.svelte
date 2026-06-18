<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14.02 18l-2.02 2l-7.5 -7.43a5 5 0 1 1 7.5 -6.57a5 5 0 0 1 8.15 5.78"}],["path",{"d":"M15.99 20l4.2 -4.22a2.81 2.81 0 0 0 0 -3.95a2.75 2.75 0 0 0 -3.91 -0.01l-0.28 0.28l-0.28 -0.28a2.75 2.75 0 0 0 -3.91 -0.01a2.81 2.81 0 0 0 -0.01 3.95l4.18 4.24l0.01 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
