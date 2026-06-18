<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 17c0 -5.52 -4.48 -10 -10 -10c-5.52 0 -10 4.48 -10 10"}],["path",{"d":"M18 17a6 6 0 1 0 -12 0"}],["path",{"d":"M14 17a2 2 0 1 0 -4 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
