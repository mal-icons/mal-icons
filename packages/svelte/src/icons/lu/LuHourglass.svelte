<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 22h14"}],["path",{"d":"M5 2h14"}],["path",{"d":"M17 22v-4.17a2 2 0 0 0-0.59-1.41L12 12l-4.41 4.41A2 2 0 0 0 7 17.83V22"}],["path",{"d":"M7 2v4.17a2 2 0 0 0 0.59 1.41L12 12l4.41-4.41A2 2 0 0 0 17 6.17V2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
