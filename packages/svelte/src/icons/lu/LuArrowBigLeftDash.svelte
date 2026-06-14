<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 9a1 1 0 0 1-1-1V4.71a0.710.71 0 0 0-1.21-0.5l-6.94 6.94a1.21 1.21 0 0 0 0 1.71l6.94 6.94a0.710.71 0 0 0 1.21-0.5V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"}],["path",{"d":"M20 9v6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
