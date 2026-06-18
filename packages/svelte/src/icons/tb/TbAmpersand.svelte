<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 20l-10.4 -10.97a2.95 2.95 0 0 1 0 -4.16a2.94 2.94 0 0 1 4.16 0a2.95 2.95 0 0 1 0 4.17l-4.68 4.69a3.69 3.69 0 0 0 0 5.21a3.68 3.68 0 0 0 5.2 0l5.72 -5.92"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
