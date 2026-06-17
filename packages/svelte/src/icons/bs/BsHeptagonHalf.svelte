<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7.780.05a0.50.5 0 0 1 0.44 0l6.02 2.97a0.50.5 0 0 1 0.270.34l1.49 6.68a0.50.5 0 0 1-0.090.42l-4.16 5.35a0.50.5 0 0 1-0.390.19H4.66a0.50.5 0 0 1-0.39-0.19L0.11 10.45a0.50.5 0 0 1-0.09-0.41l1.49-6.68a0.50.5 0 0 1 0.27-0.34zM8 15h3.09l3.87-4.97-1.38-6.21L8 1.06z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
