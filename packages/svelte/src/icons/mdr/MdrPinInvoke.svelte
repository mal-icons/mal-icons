<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 12v6c0 1.1-0.9 2-2 2H4c-1.1 0-2-0.9-2-2V6c0-1.10.9-2 2-2h10v2H4v12h16v-6h2zm0-5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zM9.34 15.66c0.390.39 1.020.39 1.41 0l2.12-2.12 1.27 1.27c0.320.310.860.090.86-0.36V10.5c0-0.28-0.22-0.5-0.5-0.5h-3.95c-0.45 0-0.670.54-0.350.85l1.27 1.27-2.12 2.12c-0.40.39-0.4 1.03-0.01 1.42z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
