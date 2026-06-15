<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.49 0h-1.98c-0.83 0-1.5 0.67-1.5 1.5v10.66l2.52 4.96 2.46-4.96v-10.65c0-0.83-0.67-1.5-1.5-1.5zM2.51 1h1.98c0.28 0 0.5 0.23 0.5 0.5v1.02h-2.98v-1.02c0-0.28 0.22-0.5 0.5-0.5zM2.01 4.55v-1.03h2.98v1.03h-2.98zM3.95 14.02h-0.87l-1.07-2.1v-6.37h1v6.48h1v-6.48h0.98v6.37l-1.04 2.1zM8 0v17h7v-17h-7zM14 16h-5v-0.98h2v-1h-2v-1.02h1v-1h-1v-1h2v-1h-2v-0.98h1v-1h-1v-1h2v-1h-2v-1.02h1v-1h-1v-1h2v-1h-2v-1h5v15z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
