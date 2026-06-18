<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 8a2 2 0 0 0 -2 -2"}],["path",{"d":"M6 8a6 6 0 1 1 12 0c0 4.97 -2.69 9 -6 9s-6 -4.03 -6 -9"}],["path",{"d":"M12 17v1a2 2 0 0 1 -2 2h-3a2 2 0 0 0 -2 2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
