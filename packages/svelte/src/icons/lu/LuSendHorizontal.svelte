<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.71 3.05a0.50.5 0 0 0-0.680.63l2.84 7.63a2 2 0 0 1 0 1.4l-2.84 7.63a0.50.5 0 0 0 0.680.63l18-8.5a0.50.5 0 0 0 0-0.9z"}],["path",{"d":"M6 12h16"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
