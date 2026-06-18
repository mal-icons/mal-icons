<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 4v3m-4 -3v6m8 -6v6"}],["path",{"d":"M12 18.5l-3 1.5l0.5 -3.5l-2 -2l3 -0.5l1.5 -3l1.5 3l3 0.5l-2 2l0.5 3.5l-3 -1.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
