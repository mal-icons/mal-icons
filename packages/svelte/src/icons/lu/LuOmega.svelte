<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 20h4.5a0.50.5 0 0 0 0.5-0.5v-0.28a0.520.52 0 0 0-0.25-0.44 8 8 0 1 1 8.4900.520.52 0 0 0-0.250.44v0.28a0.50.5 0 0 0 0.50.5H21"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
