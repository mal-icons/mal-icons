<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 19v-2a2 2 0 0 1 2 -2h2"}],["path",{"d":"M15 5v2a2 2 0 0 0 2 2h2"}],["path",{"d":"M5 15h2a2 2 0 0 1 2 2v2"}],["path",{"d":"M5 9h2a2 2 0 0 0 2 -2v-2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
