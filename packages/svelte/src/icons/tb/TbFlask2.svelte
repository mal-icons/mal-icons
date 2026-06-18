<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.1 15h11.8"}],["path",{"d":"M14 3v7.34a6 6 0 0 1 1.32 10.66h-6.63a6 6 0 0 1 1.32 -10.66v-7.34h4"}],["path",{"d":"M9 3h6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
