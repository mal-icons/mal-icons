<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.11 3.54c-0.010.82-0.5 1.21-1.110.86-0.61-0.35-1.11-1.31-1.11-2.15L12 0v4.65l5.56 3.220.550.32v7.76L22 18.21V5.79l-3.89-2.26Zm-5 3.03c-0.010.82-0.5 1.21-1.110.86-0.61-0.35-1.11-1.31-1.11-2.14l-3.89-2.25V7.41l5.56 3.220.550.32v8.04L17 21.24V8.83L13.11 6.57Zm-5 2.76c-0.010.82-0.5 1.21-1.110.86-0.61-0.35-1.11-1.31-1.11-2.15L2 5.79v12.41L12 24V11.59L8.11 9.33Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
