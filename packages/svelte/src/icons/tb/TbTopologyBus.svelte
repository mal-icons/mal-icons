<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M6 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M22 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M2 16h20"}],["path",{"d":"M4 12v4"}],["path",{"d":"M12 12v4"}],["path",{"d":"M20 12v4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
