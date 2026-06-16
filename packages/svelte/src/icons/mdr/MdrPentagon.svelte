<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m2.47 10.42 3.07 9.22c0.280.81 1.04 1.36 1.9 1.36h9.12a2 2 0 0 0 1.9-1.37l3.07-9.22c0.28-0.84-0.03-1.76-0.75-2.27L13.15 2.8a2 2 0 0 0-2.29 0L3.22 8.14c-0.720.51-1.03 1.44-0.75 2.28z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
