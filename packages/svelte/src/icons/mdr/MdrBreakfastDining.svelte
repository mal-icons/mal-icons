<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 3H6C3.79 3 2 4.79 2 7c0 1.480.81 2.75 2 3.45V19c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2v-8.55c1.19-0.69 2-1.97 2-3.45 0-2.21-1.79-4-4-4zm-2.29 10.7-3 3c-0.390.39-1.020.39-1.42 0l-3-3a11 0 0 1 0-1.41l3-3a11 0 0 1 1.41 0l3 3c0.40.390.4 1.020.01 1.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
