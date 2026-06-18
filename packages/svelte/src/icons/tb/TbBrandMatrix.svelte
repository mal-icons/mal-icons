<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 3h-1v18h1"}],["path",{"d":"M20 21h1v-18h-1"}],["path",{"d":"M7 9v6"}],["path",{"d":"M12 15v-3.5a2.5 2.5 0 1 0 -5 0v0.5"}],["path",{"d":"M17 15v-3.5a2.5 2.5 0 1 0 -5 0v0.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
