<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1.71 8.01a0.750.75 0 0 1 0.830.66 5.5 5.5 0 0 0 9.59 2.97l-1.2-1.2a0.250.25 0 0 1 0.18-0.43h3.65a0.250.25 0 0 1 0.250.25v3.65a0.250.25 0 0 1-0.430.18l-1.38-1.38A7 7 0 0 1 1.05 8.84a0.750.75 0 0 1 0.66-0.83ZM8 2.5a5.49 5.49 0 0 0-4.13 1.87l1.2 1.2A0.250.25 0 0 1 4.9 6H1.25A0.250.25 0 0 1 1 5.75V2.1a0.250.25 0 0 1 0.43-0.18l1.38 1.38A7 7 0 0 1 14.95 7.16a0.750.75 0 0 1-1.490.18A5.5 5.5 0 0 0 8 2.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
