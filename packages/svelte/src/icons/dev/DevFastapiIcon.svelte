<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-fastapi-icon-1-a)"}],["path",{"fill":"currentColor","d":"M300 0a300 300 0 1 0 0.1 600.1A300 300 0 0 0 300 0m-15.6 540.5V352.3H179.8L330 59.5v188.2h100.7z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
