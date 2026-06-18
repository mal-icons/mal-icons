<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 20a3 3 0 0 1 -3 -3v-9"}],["path",{"d":"M13 4a3 3 0 0 1 3 3v5m0 4v2l-5 -5"}],["path",{"d":"M8 4h9a3 3 0 0 1 3 3v9m-0.87 3.12a2.99 2.99 0 0 1 -2.13 0.88h-10a3 3 0 0 1 -3 -3v-10c0 -0.83 0.34 -1.58 0.88 -2.12"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
