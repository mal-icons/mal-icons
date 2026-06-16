<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 4c0.34 0 0.680.02 1.010.07C13.1 6.23 12 9.05 12 12s1.1 5.77 3.01 7.93c-0.330.05-0.670.07-1.010.07-4.41 0-8-3.59-8-8s3.59-8 8-8m0-2C8.48 2 4 6.48 4 12s4.48 10 10 10c1.82 0 3.53-0.5 5-1.35-2.99-1.73-5-4.95-5-8.65s2.01-6.92 5-8.65A9.97 9.97 0 0 0 14 2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
