<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.19 0C10.22 0 6.25 3.98 6.25 8.9V10.8h4.99V8.9c0-2.13 1.74-3.86 3.95-3.86 2.19 0 3.71 1.54 3.71 3.82 0 2.26-1.64 3.91-3.83 3.91h-1.88v5.04h1.88c4.87 0 8.82-4.01 8.82-8.95C23.89 3.72 20.2 0 15.19 0zM0.12 12.6v4.1c0 0.620.52 1.25 1.24 1.25h4.75v4.8c0 0.620.52 1.25 1.24 1.25h4.07V12.6Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
