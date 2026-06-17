<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 1.5v1h3.5a0.50.5 0 0 1 0 1h-0.54l-0.85 10.66A2 2 0 0 1 11.12 16h-6.23a2 2 0 0 1-1.99-1.84L2.04 3.5H1.5a0.50.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a0.50.5 0 0 0-0.5-0.5h-3a0.50.5 0 0 0-0.50.5M4.5 5.03l0.5 8.5a0.50.5 0 1 0 1-0.06l-0.5-8.5a0.50.5 0 1 0-10.06m6.53-0.53a0.50.5 0 0 0-0.530.47l-0.5 8.5a0.50.5 0 0 0 10.06l0.5-8.5a0.50.5 0 0 0-0.47-0.53M8 4.5a0.50.5 0 0 0-0.50.5v8.5a0.50.5 0 0 0 1 0V5a0.50.5 0 0 0-0.5-0.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
