<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.35 3.65C6.55 3.84 6.55 4.16 6.35 4.35L3.71 7H8.5C11.54 7 14 9.46 14 12.5C14 12.78 13.78 13 13.5 13C13.22 13 13 12.78 13 12.5C13 10.01 10.99 8 8.5 8H3.71L6.35 10.65C6.55 10.84 6.55 11.16 6.35 11.35C6.16 11.55 5.84 11.55 5.65 11.35L2.15 7.85C1.95 7.66 1.95 7.34 2.15 7.15L5.65 3.65C5.84 3.45 6.16 3.45 6.35 3.65Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
