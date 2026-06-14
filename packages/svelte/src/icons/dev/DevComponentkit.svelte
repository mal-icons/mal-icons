<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-componentkit-1-a)"}],["path",{"fill":"currentColor","d":"m217.4 317.8 182.4 182.4L300 600 117.6 417.6zm282.8-117.6L600 300 417.6 482.4l-99.8-99.8zM300 0l99.8 99.8-300 300L0 300z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
