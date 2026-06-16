<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 16c-1.1 0-2 0.9-2 2s0.9 2 2 2 2-0.9 2-2-0.9-2-2-2zm-6.62-1.63c-0.63-0.63-0.59-1.710.13-2.24C7.33 10.79 9.57 10 12 10c2.43 0 4.670.79 6.49 2.130.720.530.76 1.60.13 2.24-0.530.54-1.370.57-1.980.12A7.93 7.93 0 0 0 12 13c-1.73 0-3.330.55-4.64 1.49-0.610.44-1.450.41-1.98-0.12z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
