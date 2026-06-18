<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.29 4.57a7.46 7.46 0 0 0-7.34 5.01h0.57a6.93 6.93 0 0 1 6.48-4.49 6.92 6.92 0 0 1 6.92 6.92c0 0.12 0 0.23-0.010.35l0.530.06c0-0.130.01-0.270.01-0.4a7.46 7.46 0 0 0-7.17-7.45zM0.87 10.11 0 10.57l13.25 1.44 3.63-1.89H0.87zm3.68 1.48v0.41a7.46 7.46 0 0 0 14.5 2.44h-0.57a6.92 6.92 0 0 1-6.47 4.49 6.93 6.93 0 0 1-6.92-6.93v-0.35l-0.53-0.06zm6.190.41-3.63 1.9h16.01l0.87-0.45v-0.01l-13.25-1.44zm13.25 1.44H24l0-0.01v0.01z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
