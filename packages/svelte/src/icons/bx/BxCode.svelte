<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.29 6.29 2.59 12l5.71 5.71 1.41-1.41L5.41 12l4.29-4.29zm7.41 11.41L21.41 12l-5.71-5.71-1.41 1.41L18.59 12l-4.29 4.29z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
