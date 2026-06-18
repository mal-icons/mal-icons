<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17.69 0c-0.350.57-8.43 4.74-10.86 8.65-2.42 3.91-3.12 6.99-2.24 9.880.88 2.89 2.56 2.76 3.52 3.720.960.95 2.26 2.11 4.33 1.65 2.72-0.61 5.34-2.43 6.64-7.51 1.3-5.080.45-9.53-0.1-11.99A35.4 35.4 0 0 0 17.69 0zm-0.140.86l-9.22 21.59-0.57-0.58Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
