<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256.5 87.9L39.7 213.5l216.9 125.7 216.6-125.7L256.5 87.9zM31 227.4v71l218 125.7v-71L31 227.4zm450 0.2L265 353.1V424l216-125.5v-70.9z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
