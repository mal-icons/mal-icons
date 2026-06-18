<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 4v17m-3 -17v3a3 3 0 1 0 6 0v-3"}],["path",{"d":"M14 8a3 4 0 1 0 6 0a3 4 0 1 0 -6 0"}],["path",{"d":"M17 12v9"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
