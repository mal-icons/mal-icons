<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{"d":"M7 11.21a0.50.5 0 0 1 0.15-0.35l2-2a0.50.5 0 0 1 0.71 0l3.29 3.29a0.50.5 0 0 0 0.71 0l4.29-4.29a0.50.5 0 0 1 0.850.35V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
