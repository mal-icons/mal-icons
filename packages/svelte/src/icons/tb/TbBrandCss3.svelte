<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5l16 0"}],["path",{"d":"M8.5 8h7l-4.5 4h4l-0.5 3.5l-2.5 0.75l-2.5 -0.75l-0.1 -0.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
