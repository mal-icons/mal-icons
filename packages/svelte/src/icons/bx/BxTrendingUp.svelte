<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m10 10.41 4 4 5.71-5.71L22 11V5h-6l2.29 2.29L14 11.59l-4-4-7.71 7.71 1.41 1.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
