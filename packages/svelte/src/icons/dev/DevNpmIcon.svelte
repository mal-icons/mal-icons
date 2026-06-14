<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-npm-icon-1-a)"}],["path",{"fill":"currentColor","d":"M0 600V0h600v600z"}],["path",{"fill":"currentColor","d":"M112.5 112.5h375v375h-75v-300H300v300H112.5z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
