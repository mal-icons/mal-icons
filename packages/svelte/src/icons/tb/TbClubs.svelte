<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 3a4 4 0 0 1 3.16 6.45a4 4 0 1 1 -1.16 6.2v1.36l1 4h-6l1 -4l0 -1.35a4 4 0 1 1 -1.16 -6.2a4 4 0 0 1 3.16 -6.45"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
