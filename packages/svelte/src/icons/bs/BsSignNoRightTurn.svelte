<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.42 5.29L6.6 7.3A1.5 1.5 0 0 0 6 8.5V11H5V8.5c0-0.760.34-1.450.89-1.91L2.71 3.42a7 7 0 0 0 9.87 9.87Zm0.71-0.71A7 7 0 0 0 3.42 2.71l3.39 3.39Q7.14 6 7.5 6H9V4.53a0.250.25 0 0 1 0.41-0.19l2.36 1.97c0.120.10.120.28 0 0.38L9.41 8.66l-0.030.02zM7.71 7 9 8.29V7z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
