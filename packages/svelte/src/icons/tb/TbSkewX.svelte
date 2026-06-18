<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 5.21v13.59a1 1 0 0 0 1.18 0.98l14 -2.62a1 1 0 0 0 0.82 -0.98v-8.34a1 1 0 0 0 -0.82 -0.98l-14 -2.62a1 1 0 0 0 -1.18 0.98"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
