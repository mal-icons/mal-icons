<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 7v6"}],["path",{"d":"M15 10H9"}],["path",{"d":"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.50.87l-4.51-2.58a2 2 0 0 0-1.98 0l-4.51 2.58A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
