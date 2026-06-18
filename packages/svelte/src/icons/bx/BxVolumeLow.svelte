<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 17h2.7l5.75 3.83a1 1 0 0 0 1.030.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.55-0.83L6.7 7H4c-1.1 0-2 0.9-2 2v6c0 1.10.9 2 2 2zm0-8h3c0.03 0 0.06-0.020.09-0.02a1.03 1.03 0 0 0 0.38-0.12c0.03-0.010.06-0.020.08-0.03L12 5.87v12.26l-4.44-2.96c-0.02-0.02-0.06-0.02-0.08-0.03a0.980.98 0 0 0-0.38-0.12C7.06 15.02 7.03 15 7 15H4V9zm12-2v10c1.23-1.1 2-3.23 2-5s-0.77-3.9-2-5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
