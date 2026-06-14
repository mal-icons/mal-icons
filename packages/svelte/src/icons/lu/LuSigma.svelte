<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 7V5a1 1 0 0 0-1-1H6.5a0.50.5 0 0 0-0.40.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a0.50.5 0 0 0 0.40.8H17a1 1 0 0 0 1-1v-2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
