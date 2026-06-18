<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3"}],["path",{"d":"M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3"}],["path",{"d":"M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7"}],["path",{"d":"M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1"}],["path",{"d":"M17 12h0.01"}],["path",{"d":"M13 12h0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
