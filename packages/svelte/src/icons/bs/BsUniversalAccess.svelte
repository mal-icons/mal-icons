<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 5.5l-4.53-0.44A0.530.53 0 0 1 1.53 4H14.47a0.530.53 0 0 1 0.07 1.06L10 5.5V9l0.45 6.42a0.540.54 0 0 1-1.050.17L8.24 9.97c-0.06-0.25-0.42-0.25-0.49 0l-1.16 5.62a0.540.54 0 0 1-1.05-0.17L6 9z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
