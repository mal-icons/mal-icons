<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M15.75 17.25v3.38c0 0.62-0.5 1.13-1.12 1.13h-9.75a1.13 1.13 0 0 1-1.12-1.12V7.88c0-0.620.5-1.12 1.13-1.12H6.75a9.06 9.06 0 0 1 1.50.12m7.5 10.38h3.38c0.62 0 1.13-0.5 1.13-1.12V11.25c0-4.46-3.24-8.16-7.5-8.88a9.06 9.06 0 0 0-1.5-0.12H9.38c-0.62 0-1.120.5-1.12 1.13v3.5m7.5 10.38H9.38a1.13 1.13 0 0 1-1.12-1.12v-9.25m12 6.63v-1.87a3.38 3.38 0 0 0-3.37-3.37h-1.5a1.13 1.13 0 0 1-1.12-1.12v-1.5a3.38 3.38 0 0 0-3.37-3.37H9.75"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
