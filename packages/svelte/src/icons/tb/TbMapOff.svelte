<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.32 4.34l0.68 -0.34l6 3l6 -3v13m-2.67 1.34l-3.33 1.67l-6 -3l-6 3v-13l2.67 -1.33"}],["path",{"d":"M9 4v1m0 4v8"}],["path",{"d":"M15 7v4m0 4v5"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
