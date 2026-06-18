<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.16 10.99c-0.83 -1.93 1.53 -7.98 8.2 -7.98c3.33 0 4.64 1.38 4.64 3.9c0 2.6 -2.61 6.1 -9 6.1"}],["path",{"d":"M12.5 6l-5.5 15"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
