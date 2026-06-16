<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 11h-4V7.5c0-0.83-0.67-1.5-1.5-1.5S14 6.67 14 7.5V11h-4V4.5C10 3.67 9.33 3 8.5 3S7 3.67 7 4.5V11H2.84c-0.55 0-1 0.45-1 1s0.45 1 1 1H7v6.5c0 0.830.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5V13h4v3.5c0 0.830.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5V13h4c0.55 0 1-0.45 1-1s-0.45-1-1-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
