<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21.48 18.31L6.06 14.09l2.52-9.2L24 9.1l-2.52 9.2zm-13.41-5.37l12.26 3.35 1.65-6.03L9.72 6.9l-1.65 6.03v0zM8.53 15.8l-4.89 1.31-1.62-6.04 4.15-1.110.5-1.83L0 9.9l2.48 9.22 9.18-2.47"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
