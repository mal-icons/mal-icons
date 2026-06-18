<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 20l3.51 -3.5m2 -2l1.5 -1.5"}],["path",{"d":"M17 13h3v-7a2 2 0 0 0 -2 -2h-10m-3.43 0.6c-0.35 0.36 -0.57 0.85 -0.57 1.4v12a2 2 0 0 0 2 2h7v-6c0 -0.27 0.11 -0.52 0.28 -0.7"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
