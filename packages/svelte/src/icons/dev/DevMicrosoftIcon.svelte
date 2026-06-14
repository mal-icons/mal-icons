<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-microsoft-icon-1-a)"}],["path",{"fill":"currentColor","d":"M285.2 285.2H0V0h285.2z"}],["path",{"fill":"currentColor","d":"M600 285.2H314.8V0H600z"}],["path",{"fill":"currentColor","d":"M285.1 600H0V314.8h285.1z"}],["path",{"fill":"currentColor","d":"M600 600H314.8V314.8H600z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
