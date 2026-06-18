<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.71 14.12l7.81 -7.82a2 2 0 0 0 -2.82 -2.82l-7.82 7.81"}],["path",{"d":"M3.71 13.22l0.7 -0.71a5 5 0 0 1 7.08 0a5 5 0 0 1 0 7.08l-0.71 0.7"}],["path",{"d":"M3 12.5l8.5 8.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
