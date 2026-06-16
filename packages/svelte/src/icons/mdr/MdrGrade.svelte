<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m12 17.27 5.17 3.12c0.380.230.85-0.110.75-0.54l-1.37-5.88 4.56-3.95c0.33-0.290.16-0.84-0.29-0.88l-6.01-0.51-2.35-5.54a0.50.5 0 0 0-0.92 0L9.19 8.63l-6.010.51a0.50.5 0 0 0-0.280.88l4.56 3.95-1.37 5.88c-0.10.430.370.770.750.54L12 17.27z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
