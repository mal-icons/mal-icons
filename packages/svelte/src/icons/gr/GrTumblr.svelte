<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M17.64,19.17 C17.19,19.38 16.34,19.57 15.7,19.58 C13.78,19.64 13.41,18.24 13.39,17.22 L13.39,9.75 L18.21,9.75 L18.21,6.11 L13.41,6.11 L13.41,0 L9.89,0 C9.84,0 9.74,0.05 9.72,0.18 C9.52,2.05 8.64,5.33 5,6.65 L5,9.75 L7.43,9.75 L7.43,17.59 C7.43,20.27 9.41,24.09 14.64,24 C16.4,23.97 18.36,23.23 18.79,22.59 L17.64,19.17 Z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
