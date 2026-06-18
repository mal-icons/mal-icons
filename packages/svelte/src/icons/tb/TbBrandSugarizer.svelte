<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14.28 16l3.25 -3.25a1.61 1.61 0 0 0 -2.28 -2.28l-3.25 3.25l-3.25 -3.25a1.61 1.61 0 0 0 -2.28 2.28l3.25 3.25l-3.25 3.25a1.61 1.61 0 1 0 2.28 2.28l3.25 -3.25l3.25 3.25a1.61 1.61 0 1 0 2.28 -2.28l-3.25 -3.25"}],["path",{"d":"M9 5a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
