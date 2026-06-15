<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M10.34 15.84c-0.69-0.06-1.39-0.09-2.09-0.09H7.5a4.5 4.5 0 1 1 0-9h0.75c0.7 0 1.4-0.03 2.09-0.09m0 9.18c0.250.960.58 1.890.99 2.780.250.550.06 1.21-0.46 1.51l-0.660.38c-0.550.32-1.260.12-1.53-0.46a20.85 20.85 0 0 1-1.44-4.28m3.10.07a18.03 18.03 0 0 1-0.59-4.59c0-1.590.21-3.120.59-4.59m0 9.18a23.85 23.85 0 0 1 8.84 2.54M10.34 6.66a23.85 23.85 0 0 0 8.84-2.53m0 0A23.74 23.74 0 0 0 18.8 3m0.38 1.13a23.91 23.91 0 0 1 1.01 5.4m-1.01 8.86c-0.120.38-0.240.75-0.38 1.13m0.38-1.12a23.91 23.91 0 0 0 1.01-5.39m0-3.46c0.50.410.81 1.030.81 1.73 0 0.7-0.32 1.32-0.81 1.73m0-3.46a24.35 24.35 0 0 1 0 3.46"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
