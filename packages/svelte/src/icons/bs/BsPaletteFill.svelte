<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.43 10.07C14.13 10.59 16 11.15 16 8a8 8 0 1 0-8 8c2 0 1.83-1.5 1.65-3.08-0.12-1.1-0.25-2.240.35-2.920.47-0.53 1.42-0.24 2.430.07M8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
