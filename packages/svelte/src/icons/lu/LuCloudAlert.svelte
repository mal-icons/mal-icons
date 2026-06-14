<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 12v4"}],["path",{"d":"M12 20h0.01"}],["path",{"d":"M8.13 16.95A7 7 0 1 1 15.71 8h1.79a1 1 0 0 1 0 9h-1.64"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
