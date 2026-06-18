<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 19.72V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.28A1.99 1.99 0 0 0 22 18v-3c0-0.83-0.51-1.54-1.23-1.84l-1.37-4.1A3 3 0 0 0 16.56 7H7.44a3 3 0 0 0-2.84 2.05l-1.37 4.1A2 2 0 0 0 2 15v3c0 0.740.4 1.38 1 1.72zM5.5 18a1.5 1.5 0 1 1 0-3A1.5 1.5 0 0 1 5.5 18zm13 0a1.5 1.5 0 1 1 0-3A1.5 1.5 0 0 1 18.5 18zM7.44 9h9.12a1 1 0 0 1 0.950.68L18.61 13H5.39l1.11-3.32c0.14-0.410.52-0.680.95-0.68z"}],["path",{"d":"M22 7.39V5.28l-9.68-3.23a11 0 0 0-0.660.01L2 5.57V7.7l10.02-3.64L22 7.39z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
