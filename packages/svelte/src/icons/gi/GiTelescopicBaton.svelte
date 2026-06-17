<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M327.67 195.56L438.26 84.99a25.54 25.54 0 1 0-11.83-11.92l-110.68 110.63zM151.89 336.86l23.75 23.75L65.66 470.58a16.79 16.79 0 0 1-23.75-23.75zm149.81-143.52l16.33 16.33-134.79 134.79-16.33-16.33z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
