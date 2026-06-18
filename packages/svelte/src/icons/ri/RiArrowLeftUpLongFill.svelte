<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.36 19.78L19.78 18.36L10.17 8.76L14 4.93L4.93 4.93L4.93 14L8.76 10.17L18.36 19.78Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
