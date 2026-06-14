<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-cirrus-ci-1-a)"}],["path",{"fill":"currentColor","d":"M300 600a300 300 0 1 0 0-600 300 300 0 0 0 0 600"}],["path",{"fill":"currentColor","d":"M386.6 165.2a53.5 53.5 0 0 1 35 94.2 53.5 53.5 0 0 1 0 81.2 53.5 53.5 0 0 1-34 94.2H172.8a13 13 0 0 1-0.4-26h214.1a27.5 27.5 0 0 0 27.5-27.6c0-15-12-27.3-26.9-27.6H173a13 13 0 0 1-0.4-26h214.1a27.5 27.5 0 0 0 27.5-27.6c0-15-12-27.3-26.9-27.6H173a13 13 0 0 1-0.4-26h214.1a27.5 27.5 0 0 0 27.5-27.6c0-15-12-27.2-26.9-27.6h-0.6a13 13 0 1 1 0-26"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
