<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.03 12.02l-5.16 -9.51a1 1 0 0 0 -1.74 0l-8.13 14.99v0.5c0 1.66 4.03 3 9 3c0.17 0 0.34 0 0.51 0"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16v6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
