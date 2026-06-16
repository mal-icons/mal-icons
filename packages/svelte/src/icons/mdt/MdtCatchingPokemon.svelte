<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 4c4.08 0 7.45 3.05 7.94 7h-4.06c-0.45-1.73-2.02-3-3.88-3s-3.43 1.27-3.87 3H4.06C4.55 7.05 7.92 4 12 4z","opacity":".3"}],["path",{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c4.08 0 7.45 3.05 7.94 7h-4.06c-0.45-1.73-2.02-3-3.88-3s-3.43 1.27-3.87 3H4.06C4.55 7.05 7.92 4 12 4zm2 8c0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2 2 0.9 2 2zm-2 8c-4.08 0-7.45-3.05-7.94-7h4.06c0.44 1.73 2.01 3 3.87 3s3.43-1.27 3.87-3h4.06c-0.47 3.95-3.84 7-7.92 7z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
