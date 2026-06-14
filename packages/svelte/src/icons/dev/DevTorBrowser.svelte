<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-tor-browser-3-a)"}],["path",{"fill":"currentColor","d":"M300 588.3a288.3 288.3 0 1 0 0-576.6 288.3 288.3 0 0 0 0 576.6"}],["path",{"fill":"currentColor","d":"M300.6 545.4v-36.3a209 209 0 0 0 0-418.2V54.6a245.4 245.4 0 0 1 0 490.8m0-127.3a118.2 118.2 0 0 0 0-236.3v-36.3a154.5 154.5 0 0 1 0 309zm0-181.7a63.6 63.6 0 0 1 0 127.2zM0 300a300 300 0 1 0 600 0 300 300 0 0 0-600 0"}],["path",{"fill":"currentColor","d":"M300 34A270 270 0 0 0 29.3 303.5 270 270 0 0 0 300 573z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
