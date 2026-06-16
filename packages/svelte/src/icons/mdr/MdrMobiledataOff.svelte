<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 7h1.79c0.45 0 0.67-0.540.35-0.85l-2.79-2.79c-0.2-0.2-0.51-0.2-0.71 0l-2.79 2.79a0.50.5 0 0 0 0.360.85H14v4.17l2 2V7zM2.1 3.51a11 0 0 0 0 1.41l5.9 5.9V17H6.21c-0.45 0-0.670.54-0.350.85l2.79 2.78c0.20.190.510.190.71 0l2.79-2.79c0.32-0.320.09-0.85-0.35-0.85h-1.79v-4.18l9.07 9.07a11 0 1 0 1.41-1.41L3.51 3.51a11 0 0 0-1.41 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
