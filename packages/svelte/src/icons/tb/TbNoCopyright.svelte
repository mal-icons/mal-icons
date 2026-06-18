<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M14 9.75a3.02 3.02 0 0 0 -4.16 0.17a2.99 2.99 0 0 0 0 4.15a3.02 3.02 0 0 0 4.16 0.17"}],["path",{"d":"M6 6l1.5 1.5"}],["path",{"d":"M16.5 16.5l1.5 1.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
