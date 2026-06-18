<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 7h10v10h-10l0 -10"}],["path",{"d":"M6 10h4"}],["path",{"d":"M8 10v4"}],["path",{"d":"M8.1 17c0.47 2.27 2.48 4 4.9 4a5 5 0 0 0 5 -5v-7h-5"}],["path",{"d":"M18 18a4 4 0 0 0 4 -4v-5h-4"}],["path",{"d":"M13 8.83a3 3 0 1 0 -1.83 -1.83"}],["path",{"d":"M15.83 8.36a2.5 2.5 0 1 0 0.59 -4.12"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
