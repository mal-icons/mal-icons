<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-alpinejs-icon-1-a)"}],["path",{"fill":"currentColor","d":"M466.7 162.4 600 295.1 466.7 428 333.3 295z"}],["path",{"fill":"currentColor","d":"m133.3 162.4 276.5 275.2H143L0 295.1z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
