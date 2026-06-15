<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.34 19.52C3.22 16.4 3.22 11.33 6.34 8.21L12 2.55L17.66 8.21C20.78 11.33 20.78 16.4 17.66 19.52C14.53 22.65 9.47 22.65 6.34 19.52Z","stroke":"currentColor","stroke-width":"2"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
