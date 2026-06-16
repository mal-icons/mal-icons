<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 17h10v4H7zM18 7c-0.55 0-1 0.45-1 1V5c0-1.1-0.9-2-2-2H7c-1.1 0-2 0.9-2 2v5.8c0 0.130.010.260.040.39l0.8 4c0.090.470.50.80.980.8h10.36c0.45 0 0.89-0.360.98-0.8l0.8-4c0.03-0.130.04-0.260.04-0.39V8c0-0.55-0.45-1-1-1zm-3 3H7V7h8v3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
