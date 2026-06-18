<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.01 18H21V4c0-1.1-0.9-2-2-2H6c-1.21 0-3 0.8-3 3v14c0 2.2 1.79 3 3 3h15v-2H6.01C5.55 19.99 5 19.81 5 19c0-0.10.01-0.190.02-0.270.11-0.580.58-0.720.99-0.73zM8.65 7.64a2.22 2.22 0 0 1 3.13 0l0.220.220.22-0.22a2.23 2.23 0 0 1 3.13 0 2.13 2.13 0 0 1 0 3.07L12 14l-3.35-3.29a2.13 2.13 0 0 10-3.07z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
