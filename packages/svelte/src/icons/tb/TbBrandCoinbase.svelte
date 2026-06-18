<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.95 22c-4.5 0 -8.44 -3.04 -9.61 -7.41c-1.16 -4.37 0.74 -8.99 4.64 -11.25a9.91 9.91 0 0 1 12.01 1.6l-3.33 3.37a5.19 5.19 0 0 0 -7.35 0.01a5.25 5.25 0 0 0 0 7.39a5.19 5.19 0 0 0 7.35 0.01l3.35 3.37a9.89 9.89 0 0 1 -7.05 2.91"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
