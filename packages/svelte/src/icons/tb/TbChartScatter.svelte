<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 3v18h18"}],["path",{"d":"M8 15.02v0.02"}],["path",{"d":"M16 16.02v0.02"}],["path",{"d":"M8 7.03v0.02"}],["path",{"d":"M12 11.03v0.02"}],["path",{"d":"M19 11.03v0.02"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
