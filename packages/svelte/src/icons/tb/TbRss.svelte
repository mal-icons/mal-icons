<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M4 4a16 16 0 0 1 16 16"}],["path",{"d":"M4 11a9 9 0 0 1 9 9"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
