<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 22.93C1.79 22.93 0 21.14 0 18.93s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm19.46-6L15.46 3.07C14.36 1.16 11.910.5 10 1.61S7.43 5.16 8.53 7.07l8 13.86c1.1 1.91 3.55 2.57 5.46 1.46 1.91-1.1 2.57-3.55 1.46-5.46zM7.51 4.84L1.56 15.15A4.5 4.5 0 0 1 4 14.43c2.56-0.01 4.62 2.16 4.49 4.71l3.22-5.57-3.61-6.25c-0.45-0.78-0.63-1.64-0.59-2.48z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
