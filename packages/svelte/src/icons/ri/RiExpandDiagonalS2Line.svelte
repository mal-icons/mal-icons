<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 8.41V12L5 12L5 5L12 5V7L8.41 7L17 15.59V12L19 12L19 19H12V17H15.59L7 8.41Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
