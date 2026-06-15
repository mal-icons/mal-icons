<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.5 2C3.31 2 3.14 2.11 3.05 2.28L1.05 6.28C0.96 6.45 0.99 6.66 1.11 6.82L7.61 14.82C7.71 14.93 7.85 15 8 15C8.15 15 8.29 14.93 8.39 14.82L14.89 6.82C15.01 6.66 15.04 6.45 14.95 6.28L12.95 2.28C12.86 2.11 12.69 2 12.5 2H3.5ZM2.31 6L3.81 3H5.86L5.11 6H2.31ZM2.55 7H5.13L6.75 12.16L2.55 7ZM6.18 7H9.82L8 12.82L6.18 7ZM10.87 7H13.45L9.25 12.16L10.87 7ZM13.69 6H10.89L10.14 3H12.19L13.69 6ZM9.86 6H6.14L6.89 3H9.11L9.86 6Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
