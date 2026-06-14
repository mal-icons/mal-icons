<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 6.53V3a1 1 0 0 1 1-1h0"}],["path",{"d":"M18.24 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.47A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.76 10 3 3 0 0 0 3.650.65 5.5 5.5 0 0 1 5.18 0A3 3 0 0 0 18.24 21"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
