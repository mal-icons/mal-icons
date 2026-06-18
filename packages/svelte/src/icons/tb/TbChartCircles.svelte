<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 9.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0 -11 0"}],["path",{"d":"M9 14.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0 -11 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
