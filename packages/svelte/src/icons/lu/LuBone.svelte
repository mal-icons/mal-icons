<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 10c0.7-0.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 0.50.5 0 0 1-0.5-0.5 2.5 2.5 0 1 0-5 0c0 0.810.7 1.8 0 2.5l-7 7c-0.70.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c0.28 0 0.50.220.50.5a2.5 2.5 0 1 0 5 0c0-0.81-0.7-1.8 0-2.5Z"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
