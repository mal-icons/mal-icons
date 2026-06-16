<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 2H4c-1.1 0-2 0.9-2 2v15.59c0 0.89 1.08 1.34 1.710.71L6 18h14c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm-6.43 9.57-1.12 2.44a0.50.5 0 0 1-0.91 0l-1.12-2.44-2.44-1.12a0.50.5 0 0 1 0-0.91l2.44-1.12 1.12-2.44a0.50.5 0 0 1 0.91 0l1.12 2.44 2.44 1.12a0.50.5 0 0 1 0 0.91l-2.44 1.12z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
