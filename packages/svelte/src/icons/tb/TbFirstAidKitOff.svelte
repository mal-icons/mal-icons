<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.6 4.58a2 2 0 0 1 1.41 -0.58h4a2 2 0 0 1 2 2v2"}],["path",{"d":"M12 8h6a2 2 0 0 1 2 2v6m-0.58 3.41a2 2 0 0 1 -1.42 0.6h-12a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2"}],["path",{"d":"M10 14h4"}],["path",{"d":"M12 12v4"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
