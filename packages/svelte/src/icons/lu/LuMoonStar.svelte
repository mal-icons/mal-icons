<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 5h4"}],["path",{"d":"M20 3v4"}],["path",{"d":"M20.99 12.49a9 9 0 1 1-9.47-9.47c0.41-0.020.620.460.40.8a6 6 0 0 0 8.27 8.27c0.34-0.210.8300.80.4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
