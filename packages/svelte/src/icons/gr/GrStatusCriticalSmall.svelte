<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","stroke":"currentColor","d":"M6.71,1.26 C6.32,0.87 5.68,0.87 5.29,1.26 L1.26,5.29 C0.87,5.68 0.87,6.32 1.26,6.71 L5.29,10.74 C5.68,11.13 6.32,11.13 6.71,10.74 L10.74,6.71 C11.13,6.32 11.13,5.68 10.74,5.29 L6.71,1.26 Z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 12 12" {nodes} {defaultAttr} {...props} />
