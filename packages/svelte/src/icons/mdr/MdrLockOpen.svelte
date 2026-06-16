<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 13c-1.1 0-2 0.9-2 2s0.9 2 2 2 2-0.9 2-2-0.9-2-2-2zm6-5h-1V6c0-2.76-2.24-5-5-5-2.28 0-4.27 1.54-4.84 3.75-0.140.540.18 1.080.72 1.22a1 1 0 0 0 1.22-0.72A3 3 0 0 1 12 3c1.65 0 3 1.35 3 3v2H6c-1.1 0-2 0.9-2 2v10c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2V10c0-1.1-0.9-2-2-2zm0 11c0 0.55-0.45 1-1 1H7c-0.55 0-1-0.45-1-1v-8c0-0.550.45-1 1-1h10c0.55 0 1 0.45 1 1v8z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
