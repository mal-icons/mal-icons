<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.54 18.25a6.46 6.46 0 0 1 0-12.58V1.22A0.430.43 0 0 0 9.80.93l-9.36 9.97a1.61 1.61 0 0 0 0 2.2l9.36 9.98a0.430.43 0 0 0 0.75-0.3zm2.92 0a6.46 6.46 0 0 0 0-12.58V1.22a0.430.43 0 0 1 0.75-0.29l9.36 9.97a1.61 1.61 0 0 1 0 2.2l-9.36 9.98a0.430.43 0 0 1-0.75-0.3zm2.26-6.29a3.73 3.73 0 0 1-3.73 3.73 3.73 3.73 0 0 1-3.73-3.73 3.73 3.73 0 0 1 3.73-3.73 3.73 3.73 0 0 1 3.73 3.73z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
