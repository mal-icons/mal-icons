<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M443.54 120.19l-112 64 8.93 15.63 112-64-8.93-15.63zM297 153v206h17.97V153H297zm-18 9.37L73 235.07v41.86l206 72.71V162.37zM39 240v32h18v-32H39zm297 7v18h128v-18H336zM99.33 300.89l-14.8 40.22L181.02 379.7l16.11-40.36-16.72-6.67-9.43 23.64-63.51-25.4 8.76-23.79-16.89-6.22zm241.13 11.3l-8.93 15.63 112 64 8.93-15.63-112-64z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
