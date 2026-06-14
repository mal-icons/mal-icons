<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-jetbrains-icon-2-a)"}],["path",{"fill":"currentColor","d":"M190.7 34.3 34.3 190.7A117 117 0 0 0 0 273.6V553c0 26 21 47 46.9 47h279.5c31.2 0 60.9-12.4 83-34.3l156.3-156.4a117 117 0 0 0 34.3-82.9V47c0-26-21-47-46.9-47H273.6c-31.2 0-60.9 12.4-83 34.3"}],["path",{"fill":"currentColor","d":"M450 150H75v375h375z"}],["path",{"fill":"currentColor","d":"M281.3 440.6H121.9v37.5h159.4z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
