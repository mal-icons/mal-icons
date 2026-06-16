<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 8.94V21h4v-4.89c0-1 0.68-1.92 1.66-2.08A2 2 0 0 1 14 16v5h4V8.94a2 2 0 0 0-0.72-1.54l-4-3.33c-0.74-0.62-1.82-0.62-2.56 0l-4 3.33c-0.460.38-0.720.94-0.72 1.54zM13.5 10c0 0.83-0.67 1.5-1.5 1.5s-1.5-0.67-1.5-1.50.67-1.5 1.5-1.5 1.50.67 1.5 1.5zM3 5c-1.1 0-2 0.9-2 2v1h4V7c0-1.1-0.9-2-2-2zm0 16h2V9H1v10c0 1.10.9 2 2 2zM21 5c-1.1 0-2 0.9-2 2v1h4V7c0-1.1-0.9-2-2-2zm-2 16h2c1.1 0 2-0.9 2-2V9h-4v12z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
