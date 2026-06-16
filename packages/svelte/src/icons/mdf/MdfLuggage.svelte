<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 6h-2V3c0-0.55-0.45-1-1-1h-4c-0.55 0-1 0.45-1 1v3H7c-1.1 0-2 0.9-2 2v11c0 1.10.9 2 2 2 0 0.550.45 1 1 1s1-0.45 1-1h6c0 0.550.45 1 1 1s1-0.45 1-1c1.1 0 2-0.9 2-2V8c0-1.1-0.9-2-2-2zM9.5 18H8V9h1.5v9zm3.25 0h-1.5V9h1.5v9zm0.75-12h-3V3.5h3V6zM16 18h-1.5V9H16v9z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
