<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 9a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}],["path",{"d":"M9 9a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M5 9v11a2 2 0 1 0 4 0v-4.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
