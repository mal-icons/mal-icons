<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14.5 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-0.71-1.71l-3.59-3.59A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.8"}],["path",{"d":"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{"d":"M11.7 14.2 7 17l-4.7-2.8"}],["path",{"d":"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 0.97 1.78L6 21.7a2 2 0 0 0 2.030.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-0.97-1.78L8 11.3a2 2 0 0 0-2.03-0.01z"}],["path",{"d":"M7 17v5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
