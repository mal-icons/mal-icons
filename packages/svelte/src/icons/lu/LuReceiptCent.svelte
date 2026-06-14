<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 7v10"}],["path",{"d":"M14.83 14.83a4 4 0 0 1-5.66 0 4 4 0 0 1 0-5.66 4 4 0 0 1 5.66 0"}],["path",{"d":"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 0.70.2l0.930.6a1.3 1.3 0 0 0 1.4 0l0.93-0.6a1.3 1.3 0 0 1 1.4 0l0.930.6a1.3 1.3 0 0 0 1.4 0l0.93-0.6a1.3 1.3 0 0 1 1.4 0l0.930.6a1.3 1.3 0 0 0 1.4 0l0.93-0.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-0.7-0.2l-0.93-0.6a1.3 1.3 0 0 0-1.4 0l-0.930.6a1.3 1.3 0 0 1-1.4 0l-0.93-0.6a1.3 1.3 0 0 0-1.4 0l-0.930.6a1.3 1.3 0 0 1-1.4 0l-0.93-0.6a1.3 1.3 0 0 0-1.4 0l-0.930.6a1.3 1.3 0 0 1-0.70.2 1 1 0 0 1-1-1z"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
