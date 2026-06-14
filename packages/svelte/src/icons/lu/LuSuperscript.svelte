<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m4 19 8-8"}],["path",{"d":"m12 19-8-8"}],["path",{"d":"M20 12h-4c0-1.50.44-2 1.5-2.5S20 8.33 20 7c0-0.47-0.17-0.93-0.48-1.29a2.11 2.11 0 0 0-2.62-0.44c-0.420.24-0.740.61-0.9 1.06"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
