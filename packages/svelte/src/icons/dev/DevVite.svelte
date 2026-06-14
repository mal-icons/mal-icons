<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-vite-3-a)"}],["path",{"fill":"currentColor","d":"M597.6 88.8 316.1 592.2a15.3 15.3 0 0 1-26.6 0L2.5 89a15.3 15.3 0 0 1 16-22.7l281.7 50.4q2.70.5 5.4 0l276-50.3a15.3 15.3 0 0 1 16 22.5"}],["path",{"fill":"currentColor","d":"M434.40.1 226.1 41c-3.40.6-6 3.5-6.1 7l-13 216.4a7.8 7.8 0 0 0 9.4 8l58-13.4a7.6 7.6 0 0 1 9.2 9l-17.2 84.3a7.7 7.7 0 0 0 9.7 8.9l35.8-10.9a7.7 7.7 0 0 1 9.7 8.9l-27.3 132.5c-1.8 8.3 9.3 12.8 13.9 5.7l3-4.7L481 153.9a7.6 7.6 0 0 0-8.3-11L413 154.6a7.7 7.7 0 0 1-8.8-9.7l39-135a7.7 7.7 0 0 0-8.9-9.7"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
