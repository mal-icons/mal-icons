<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 3c0.38 0 0.71 0.23 0.85 0.58l1.65 4.29a2.85 2.85 0 0 0 1.63 1.63l4.29 1.65a0.91 0.91 0 0 1 0 1.69l-4.29 1.65a2.84 2.84 0 0 0 -1.63 1.63l-1.65 4.29a0.91 0.91 0 0 1 -1.69 0l-1.65 -4.29a2.84 2.84 0 0 0 -1.63 -1.63l-4.29 -1.65a0.91 0.91 0 0 1 0 -1.69l4.29 -1.65a2.84 2.84 0 0 0 1.63 -1.63l1.65 -4.29a0.91 0.91 0 0 1 0.85 -0.58"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
