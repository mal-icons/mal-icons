<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 7v10.88l2 2V5h-9.58l3.29-3.3L16 1l-4 4-4-4-0.70.7L10.58 5H8.12l2 2zM2.41 2.13l-0.140.14L1 3.54l1.53 1.53H1V21h17.46l1.99 1.99 1.26-1.260.15-0.15L2.41 2.13zM3 19V7h1.46l12 12H3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
