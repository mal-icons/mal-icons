<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.18 19.57a11 0 0 0 1.64 0l9-13A11 0 0 0 21 5H3a1 1 0 0 0-0.82 1.57l9 13z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
