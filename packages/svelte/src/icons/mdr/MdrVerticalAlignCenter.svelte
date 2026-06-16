<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.21 19H11v3c0 0.550.45 1 1 1s1-0.45 1-1v-3h1.79c0.45 0 0.67-0.540.35-0.85l-2.79-2.79c-0.2-0.2-0.51-0.2-0.71 0l-2.79 2.79a0.50.5 0 0 0 0.360.85zm5.58-14H13V2c0-0.55-0.45-1-1-1s-1 0.45-1 1v3H9.21a0.50.5 0 0 0-0.360.85l2.79 2.79c0.20.20.510.20.71 0l2.79-2.79c0.32-0.310.1-0.85-0.35-0.85zM4 12c0 0.550.45 1 1 1h14c0.55 0 1-0.45 1-1s-0.45-1-1-1H5c-0.55 0-1 0.45-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
