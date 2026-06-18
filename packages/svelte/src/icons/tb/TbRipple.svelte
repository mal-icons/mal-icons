<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 7c3 -2 6 -2 9 0s6 2 9 0"}],["path",{"d":"M3 17c3 -2 6 -2 9 0s6 2 9 0"}],["path",{"d":"M3 12c3 -2 6 -2 9 0s6 2 9 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
