<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 8h-2c-0.55 0-1 0.45-1 1s0.45 1 1 1h2v11H6V10h2c0.55 0 1-0.45 1-1s-0.45-1-1-1H6c-1.1 0-2 0.9-2 2v11c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2V10c0-1.1-0.9-2-2-2z"}],["path",{"d":"M12 16c0.55 0 1-0.45 1-1V5h1.79c0.45 0 0.67-0.540.35-0.85l-2.79-2.79c-0.2-0.2-0.51-0.2-0.71 0L8.85 4.15a0.50.5 0 0 0 0.360.85H11v10c0 0.550.45 1 1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
