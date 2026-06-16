<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM8.5 8c0.83 0 1.50.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8zm8.25 6.75c-0.95 1.64-2.72 2.75-4.75 2.75s-3.8-1.11-4.75-2.75c-0.19-0.330.06-0.750.44-0.75h8.62c0.39 0 0.630.420.440.75zM15.5 11c-0.83 0-1.5-0.67-1.5-1.5S14.67 8 15.5 8s1.50.67 1.5 1.5-0.67 1.5-1.5 1.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
