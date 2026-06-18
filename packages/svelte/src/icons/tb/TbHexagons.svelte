<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 18v-5l4 -2l4 2v5l-4 2l-4 -2"}],["path",{"d":"M8 11v-5l4 -2l4 2v5"}],["path",{"d":"M12 13l4 -2l4 2v5l-4 2l-4 -2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
