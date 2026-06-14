<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-monero-1-a)"}],["path",{"fill":"currentColor","d":"M300 0A300 300 0 0 0 15.3 394.8H105V142.3l195 195 195-195v252.5h89.7A300 300 0 0 0 300 0"}],["path",{"fill":"currentColor","d":"M255.2 382.2 170 297v158.8H43.6a299.8 299.8 0 0 0 512.7 0H430V297.1l-85 85-45 45z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
