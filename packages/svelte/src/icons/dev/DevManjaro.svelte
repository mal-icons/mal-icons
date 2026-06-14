<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-manjaro-1-a)"}],["path",{"fill":"currentColor","d":"M600 0v600H424.4V0zM387.8 212.2V600H212.2V212.2zm0-212.2v175.6H175V600H0V0z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
