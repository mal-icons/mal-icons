<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 6v12"}],["path",{"d":"M5 12c3.5 0 6 -3 6 -6"}],["path",{"d":"M5 12c3.5 0 6 3 6 6"}],["path",{"d":"M15 10v8"}],["path",{"d":"M19 10a4 4 0 0 0 -4 4"}],["path",{"d":"M20 18.01v-0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
