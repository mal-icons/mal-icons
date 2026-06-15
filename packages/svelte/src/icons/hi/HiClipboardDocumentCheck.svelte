<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M11.35 3.84c-0.060.21-0.10.43-0.10.66 0 0.410.340.750.750.75h4.5a0.750.75 0 0 0 0.75-0.75 2.25 2.25 0 0 0-0.1-0.66m-5.8 0A2.25 2.25 0 0 1 13.5 2.25H15c1.01 0 1.870.67 2.15 1.59m-5.8 0c-0.380.02-0.750.05-1.120.08C9.1 4.01 8.25 4.97 8.25 6.11V8.25m8.9-4.41c0.380.020.750.05 1.120.08 1.130.09 1.98 1.06 1.98 2.19V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.88c-0.62 0-1.120.5-1.12 1.13v11.25c0 0.620.5 1.13 1.13 1.13h9.75c0.62 0 1.13-0.5 1.13-1.12V18.75m-7.5-10.5h6.38c0.62 0 1.130.5 1.13 1.13v9.38m-8.25-3 1.5 1.5 3-3.75"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
