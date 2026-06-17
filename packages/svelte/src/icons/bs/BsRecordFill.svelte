<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
