<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 13h12"}],["path",{"d":"M12 21v-8l-0.42 -0.21a6.47 6.47 0 0 1 -3.58 -5.79a4 4 0 1 1 8 0a6.47 6.47 0 0 1 -3.58 5.79l-0.42 0.21"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
