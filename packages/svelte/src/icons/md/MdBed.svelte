<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 10.78V8c0-1.65-1.35-3-3-3h-4c-0.77 0-1.470.3-2 0.78-0.53-0.48-1.23-0.78-2-0.78H6C4.35 5 3 6.35 3 8v2.78c-0.610.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-0.88-0.39-1.67-1-2.22zM14 7h4c0.55 0 1 0.45 1 1v2h-6V8c0-0.550.45-1 1-1zM5 8c0-0.550.45-1 1-1h4c0.55 0 1 0.45 1 1v2H5V8zm-1 7v-2c0-0.550.45-1 1-1h14c0.55 0 1 0.45 1 1v2H4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
