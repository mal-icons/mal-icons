<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M6,13.29 C7.63,11.66 10.62,8.67 12.36,6.93 C15.19,4.11 19.43,8.35 16.6,11.17 C13.77,14 11.65,16.12 10.24,17.53 C8.83,18.95 6.71,16.83 8.12,15.41 C9.53,14 14.48,9.05 14.48,9.05"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
