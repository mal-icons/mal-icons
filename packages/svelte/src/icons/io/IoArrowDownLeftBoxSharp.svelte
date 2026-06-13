<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M32 480L32 315.64L64 315.64L64 425.37L107.64 381.74L107.64 404.36L130.26 404.36L86.63 448L196.36 448L196.36 480L32 480ZM318.63 216L130.26 404.36L480 404.36L480 32L107.64 32L107.64 381.74L296 193.37L318.63 216Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
