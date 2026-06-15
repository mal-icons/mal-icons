<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M1,12 C1,18.08 5.93,23 12,23 C18.08,23 23,18.08 23,12 C23,5.93 18.08,1 12,1 C7.56,1 4,4 2,7.5 M1,1 L1,8 L8,8 M16,17 L12,13 L12,6"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
