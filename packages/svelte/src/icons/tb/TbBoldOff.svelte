<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 5h4a3.5 3.5 0 0 1 2.22 6.2m-3.22 0.8h-5v-5"}],["path",{"d":"M17.11 17.11a3.5 3.5 0 0 1 -3.11 1.89h-7v-7"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
