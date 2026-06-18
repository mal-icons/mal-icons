<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m3.5 14.04 7.02-7.02a4.95 4.95 0 0 0 1.47-3.53A4.99 4.99 0 0 0 10.56 0L3.54 7.02a4.95 4.95 0 0 0-1.47 3.53c0 1.370.55 2.6 1.43 3.5zm17.01-4.1-7.02 7.02a4.95 4.95 0 0 0-1.47 3.53c0 1.360.55 2.6 1.43 3.5l7.02-7.02a4.94 4.94 0 0 0 1.47-3.53c0-1.37-0.55-2.6-1.43-3.5zm-0.04-2.9a4.94 4.94 0 0 0 1.47-3.52c0-1.36-0.55-2.6-1.43-3.5L3.54 16.97A4.99 4.99 0 0 0 3.5 24Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
