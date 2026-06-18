<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 8.71l-5.33 -4.15a2.67 2.67 0 0 0 -3.27 0l-5.33 4.15a2.67 2.67 0 0 0 -1.03 2.11v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -0.82 -0.38 -1.6 -1.03 -2.1"}],["path",{"d":"M16 15c-2.21 1.33 -5.79 1.33 -8 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
