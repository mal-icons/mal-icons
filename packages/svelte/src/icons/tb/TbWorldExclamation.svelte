<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.99 12.51a9 9 0 1 0 -5.71 7.87"}],["path",{"d":"M3.6 9h16.8"}],["path",{"d":"M3.6 15h10.9"}],["path",{"d":"M11.5 3a17 17 0 0 0 0 18"}],["path",{"d":"M12.5 3a17 17 0 0 1 0 18"}],["path",{"d":"M19 16v3"}],["path",{"d":"M19 22v0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
