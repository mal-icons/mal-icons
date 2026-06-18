<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.5 19h-3.5"}],["path",{"d":"M8.6 16.48a1.5 1.5 0 1 0 -1.1 2.52"}],["path",{"d":"M7 4v9"}],["path",{"d":"M15 13h1.89a1.5 1.5 0 0 0 1.3 -2.26l-2.18 -3.74"}],["path",{"d":"M11 13.01v-0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
