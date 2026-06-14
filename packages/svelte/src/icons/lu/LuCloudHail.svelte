<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 14.9A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.24"}],["path",{"d":"M16 14v2"}],["path",{"d":"M8 14v2"}],["path",{"d":"M16 20h0.01"}],["path",{"d":"M8 20h0.01"}],["path",{"d":"M12 16v2"}],["path",{"d":"M12 22h0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
