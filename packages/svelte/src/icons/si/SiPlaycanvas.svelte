<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.12 0l0 3.41 5.82 3.41-5.82 3.410 3.41 11.77-6.83zm11.77 10.35L6.11 17.17 17.89 24l0-3.41-5.82-3.41 5.82-3.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
