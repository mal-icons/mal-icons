<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-crystal-1-a)"}],["path",{"fill":"currentColor","d":"M218.8 0 0 219.7l80.3 300.9L382 600l218-220.6L520.6 83zm-203 223.2 293-76.7-80.3 292z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
