<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m6.020.91 6.66 2.5-1.24 3.3-6.66-2.5ZM16.70.1l2.2 6.77-3.35 1.09-2.2-6.77zM24 7.94l-3.92 5.94-2.94-1.94L21.06 6Zm-1.58 10.59-7.090.64-0.32-3.51 7.09-0.64zm-9.27 5.37L8.23 18.76l2.55-2.44 4.92 5.14zm-9.98-3.90.95-7.05 3.490.47-0.95 7.05zM0 9.77l6.11-3.65L7.92 9.14l-6.11 3.65Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
