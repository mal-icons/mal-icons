<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.1 2.04a0.810.81 0 0 0-0.550.22L0.51 9.76A1.62 1.62 0 0 0 0 10.94V21.15c0 0.450.360.810.810.81h16.58a0.810.81 0 0 0 0.81-0.81V10.94a1.62 1.62 0 0 0-0.51-1.18l-8.03-7.5a0.80.8 0 0 0-0.55-0.22zm0 4.96 5.25 4.9v6.2H3.85v-6.2l5.25-4.9zM21.65 17.35a2.31 2.31 0 0 0-2.26 2.3 2.31 2.31 0 0 0 2.31 2.31A2.31 2.31 0 0 0 24 19.65a2.31 2.31 0 0 0-2.31-2.3 2.31 2.31 0 0 0-0.05 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
