<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2v2"}],["path",{"d":"M14.84 16.39a6 6 0 1 1-7.22-7.22c0.62-0.150.970.660.72 1.25a4 4 0 0 0 5.26 5.26c0.59-0.25 1.40.09 1.250.72"}],["path",{"d":"M16 12a4 4 0 0 0-4-4"}],["path",{"d":"m19 5-1.26 1.26"}],["path",{"d":"M20 12h2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
