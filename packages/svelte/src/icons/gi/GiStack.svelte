<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 18.36L50.14 136 256 253.64 461.86 136 256 18.36zm-154 168L50.14 216 256 333.64 461.86 216 410 186.37l-154 88-154-88zm0 80L50.14 296 256 413.64 461.86 296 410 266.37l-154 88-154-88zm0 80L50.14 376 256 493.64 461.86 376 410 346.37l-154 88-154-88z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
