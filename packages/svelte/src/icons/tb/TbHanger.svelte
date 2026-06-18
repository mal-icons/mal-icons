<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 6a2 2 0 1 0 -4 0c0 1.67 0.67 3 2 4h-0.01l7.97 4.43a2 2 0 0 1 1.03 1.75v0.82a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-0.82a2 2 0 0 1 1.03 -1.75l7.97 -4.43"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
