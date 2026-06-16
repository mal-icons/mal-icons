<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 5v8.55c-0.94-0.54-2.1-0.75-3.33-0.32-1.340.48-2.37 1.67-2.61 3.07a4.01 4.01 0 0 0 4.59 4.65c1.96-0.31 3.35-2.11 3.35-4.1V7h2c1.1 0 2-0.9 2-2s-0.9-2-2-2h-2c-1.1 0-2 0.9-2 2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
