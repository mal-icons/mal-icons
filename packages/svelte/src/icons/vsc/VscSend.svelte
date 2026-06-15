<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1.18 1.12C1.33 0.99 1.54 0.96 1.72 1.05L14.72 7.55C14.89 7.64 15 7.81 15 8C15 8.19 14.89 8.36 14.72 8.45L1.72 14.95C1.54 15.04 1.33 15.01 1.18 14.88C1.02 14.75 0.96 14.54 1.02 14.35L2.98 8L1.02 1.65C0.96 1.46 1.02 1.25 1.18 1.12ZM3.87 8.5L2.32 13.53L13.38 8L2.32 2.47L3.87 7.5H9.5C9.78 7.5 10 7.72 10 8C10 8.28 9.78 8.5 9.5 8.5H3.87Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
