<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.82 19.82a2 2 0 0 1 -1.82 1.18h-12a2 2 0 0 1 -2 -2v-14c0 -0.29 0.06 -0.57 0.18 -0.83m2.82 -1.17h11a2 2 0 0 1 2 2v11"}],["path",{"d":"M10 10h-1a1 1 0 0 1 -1 -1v-1m3 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1"}],["path",{"d":"M8 14v0.01"}],["path",{"d":"M12 14v0.01"}],["path",{"d":"M8 17v0.01"}],["path",{"d":"M12 17v0.01"}],["path",{"d":"M16 17v0.01"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
