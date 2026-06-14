<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"fill":"currentColor","clip-path":"url(#devicon-modernizr-1-a)"}],["path",{"d":"M0 444v-96h96v-96h96v-96h96v288zm312-288c159 0 288 129 288 288H312z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
