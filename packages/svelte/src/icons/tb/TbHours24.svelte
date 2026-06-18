<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 13c0.33 2.53 1.88 4.78 4 6"}],["path",{"d":"M20 11a8.1 8.1 0 0 0 -15.5 -2"}],["path",{"d":"M4 5v4h4"}],["path",{"d":"M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2"}],["path",{"d":"M18 15v2a1 1 0 0 0 1 1h1"}],["path",{"d":"M21 15v6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
