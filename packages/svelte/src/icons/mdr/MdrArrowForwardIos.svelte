<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7.38 21.01c0.490.49 1.280.49 1.77 0l8.31-8.31a11 0 0 0 0-1.41L9.15 2.98c-0.49-0.49-1.28-0.49-1.77 0s-0.49 1.28 0 1.77L14.62 12l-7.25 7.25c-0.480.48-0.48 1.280.01 1.76z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
