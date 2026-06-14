<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm2 2c0 1-0.5 2-1.5 2s-1.5 1-1.5 2v3s1 0 1-3c0-0.550.45-1 1-1s1 0.45 1 1v3c-0.55 0-1 0.45-1 1s0.45 1 1 1c0.55 0 1-0.45 1-1h1v-2l1 1-1 1c0 3 0 3-2 4 0-1-1-1-3-1v-2l-2-2v-2c-1 0-1 1-1 1l-0.56-0.56-2.39-2.39c0.11-0.190.23-0.380.35-0.56l0.52-0.68c1.47-1.72 3.64-2.81 6.08-2.810.69 0 1.360.1 2 0.26v0.74z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
