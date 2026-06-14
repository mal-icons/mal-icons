<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.53 2.22a0.750.75 0 0 0-1.06 0L2.22 8.47a0.750.75 0 0 0 0 1.06l6.25 6.25a0.750.75 0 0 0 1.06-1.06L4.56 9.75H16c0.8 0 2.010.25 3 0.960.950.69 1.75 1.84 1.75 3.79s-0.8 3.11-1.75 3.79c-0.990.71-2.20.96-3 0.96h-3a0.750.75 0 0 0 0 1.5h3c1.04 0 2.58-0.3 3.88-1.24 1.34-0.96 2.37-2.56 2.37-5.01 0-2.44-1.03-4.04-2.37-5.01C18.58 8.56 17.04 8.25 16 8.25H4.56l4.97-4.97a0.750.75 0 0 0 0-1.06Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
