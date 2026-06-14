<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 16v5"}],["path",{"d":"M16 14.64V21"}],["path",{"d":"M20 10.66V21"}],["path",{"d":"m22 3-8.65 8.65a0.50.5 0 0 1-0.71 0L9.35 8.35a0.50.5 0 0 0-0.71 0L2 15"}],["path",{"d":"M4 18.46V21"}],["path",{"d":"M8 14.66V21"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
