<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 4h1.8c3.98 0 7.2 3.58 7.2 8s-3.22 8 -7.2 8h-1.8"}],["path",{"d":"M12 4h5.47c1.95 0 3.53 1.79 3.53 4s-1.58 4 -3.53 4"}],["path",{"d":"M17.47 12h-2.47"}],["path",{"d":"M17.47 12h-2.35"}],["path",{"d":"M17.47 12c1.95 0 3.53 1.79 3.53 4s-1.58 4 -3.53 4h-5.47"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
