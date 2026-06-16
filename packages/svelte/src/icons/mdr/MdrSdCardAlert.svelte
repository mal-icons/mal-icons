<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 2h-7.17c-0.53 0-1.040.21-1.420.59L4.6 7.42c-0.370.37-0.580.88-0.58 1.4L4 20c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm-5 15h-2v-2h2v2zm-1-4c-0.55 0-1-0.45-1-1V9c0-0.550.45-1 1-1s1 0.45 1 1v3c0 0.55-0.45 1-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
