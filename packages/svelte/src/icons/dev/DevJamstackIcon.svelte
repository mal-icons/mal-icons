<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-jamstack-icon-1-a)"}],["path",{"fill":"currentColor","d":"M300 0A299.7 299.7 0 0 0 0 300c0 165.9 134.1 300 300 300s300-134.1 300-300V0z"}],["path",{"fill":"currentColor","d":"M283.7 316.3V535A233 233 0 0 1 65.2 319.8l-0.2-3.5zm213.2 0c-6.1 116.4-91 210.1-197.3 218.5l-3.20.2V316.3zM497 103v200.7H296.4V102.9z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
