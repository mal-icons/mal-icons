<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 0v24h24V0H0zm3.87 3.69c1.040 1.880.84 1.88 1.880 1.03-0.84 1.87-1.87 1.87C2.84 7.44 2 6.6 2 5.56c0-1.030.84-1.87 1.87-1.87zm4.490.51h3.53l6.73 10.81h0.05V4.2H22v16.12h-3.55l-6.72-10.79h-0.05v10.79H8.36V4.2zm-6.12 4.79s0.010 3.39 0v11.28H2.24V8.98z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
