<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm2.5 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12 9h6.38a0.750.75 0 0 1 0 1.5h-4.03l0.54 4.420.48 4.5a0.750.75 0 1 1-1.490.16l-0.41-3.83H10.53l-0.41 3.83a0.750.75 0 1 1-1.49-0.16l0.48-4.510.54-4.41H5.63a0.750.75 0 0 1 0-1.5H12Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
