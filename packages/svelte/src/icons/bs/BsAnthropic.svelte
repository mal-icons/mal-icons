<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M9.22 2h2.4L16 12.99h-2.4zM4.38 2h2.51l4.38 10.99H8.82l-0.89-2.31h-4.58l-0.9 2.31H0L4.38 2zm2.76 6.64L5.64 4.78 4.14 8.64z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
