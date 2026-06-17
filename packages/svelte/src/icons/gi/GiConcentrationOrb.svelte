<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M163.5 17.75c-125.03 2.13-223.03 231.99-9.19 461.63-197.34-240.61 9.41-548.5 174.16-289.03C287.35 66.33 222.42 16.74 163.5 17.75zm201.78 4.66c197.34 240.61-9.41 548.53-174.15 289.06C319.48 698.62 679.9 360.25 365.28 22.41zm-98.31 155.75c-42.42 0-76.81 34.39-76.81 76.81 0 42.42 34.39 76.81 76.81 76.81 42.42 0 76.81-34.39 76.81-76.81 0-42.42-34.39-76.81-76.81-76.81z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
