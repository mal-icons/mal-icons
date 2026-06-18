<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 19c8 0 18 -16 18 -16"}],["path",{"d":"M17 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M17 19h-2"}],["path",{"d":"M12 19h-2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
