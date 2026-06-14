<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 2v6a2 2 0 0 0 0.250.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.75-2.96l5.51-10.08A2 2 0 0 0 10 8V2"}],["path",{"d":"M6.45 15h11.09"}],["path",{"d":"M8.5 2h7"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
