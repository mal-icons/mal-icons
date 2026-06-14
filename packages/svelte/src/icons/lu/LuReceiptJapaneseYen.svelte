<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m12 10 3-3"}],["path",{"d":"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 0.70.2l0.930.6a1.3 1.3 0 0 0 1.4 0l0.93-0.6a1.3 1.3 0 0 1 1.4 0l0.930.6a1.3 1.3 0 0 0 1.4 0l0.93-0.6a1.3 1.3 0 0 1 1.4 0l0.930.6a1.3 1.3 0 0 0 1.4 0l0.93-0.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-0.7-0.2l-0.93-0.6a1.3 1.3 0 0 0-1.4 0l-0.930.6a1.3 1.3 0 0 1-1.4 0l-0.93-0.6a1.3 1.3 0 0 0-1.4 0l-0.930.6a1.3 1.3 0 0 1-1.4 0l-0.93-0.6a1.3 1.3 0 0 0-1.4 0l-0.930.6a1.3 1.3 0 0 1-0.70.2 1 1 0 0 1-1-1z"}],["path",{"d":"M9 11h6"}],["path",{"d":"M9 15h6"}],["path",{"d":"m9 7 3 3v7"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
