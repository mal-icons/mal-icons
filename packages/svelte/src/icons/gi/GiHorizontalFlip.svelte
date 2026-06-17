<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M387.02 278.63v67.88L477.53 256l-90.51-90.51v67.88H124.98V165.49L34.47 256l90.51 90.51v-67.88h262.04z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
