<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 4.2c1.5 0 3 0.6 4.2 1.7l0.8-0.8C19.6 3.7 17.8 3 16 3s-3.60.7-5 2.1l0.80.8C13 4.8 14.5 4.2 16 4.2zm-3.3 2.50.80.8c0.7-0.7 1.6-1 2.5-1s1.80.3 2.5 1l0.8-0.8c-0.9-0.9-2.1-1.4-3.3-1.4s-2.40.5-3.3 1.4zM19 13h-2V9h-2v4H5c-1.1 0-2 0.9-2 2v4c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2v-4c0-1.1-0.9-2-2-2zm0 6H5v-4h14v4zM6 16h2v2H6zm3.5 0h2v2h-2zm3.5 0h2v2h-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
