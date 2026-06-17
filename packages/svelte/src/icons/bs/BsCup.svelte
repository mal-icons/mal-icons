<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M0.11 3.19A0.50.5 0 0 1 0.5 3h13a0.50.5 0 0 1 0.490.61l-0.220.99a3 3 0 0 1-1.3 5.85l-0.130.59A2.5 2.5 0 0 1 9.9 13H4.1a2.5 2.5 0 0 1-2.44-1.96L0.01 3.61a0.50.5 0 0 1 0.1-0.42Zm12.57 6.29a2 2 0 0 0 0.87-3.9zM1.12 4l1.52 6.83A1.5 1.5 0 0 0 4.1 12h5.79a1.5 1.5 0 0 0 1.46-1.17L12.88 4H1.12Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
