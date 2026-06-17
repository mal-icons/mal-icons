<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M8 2a0.50.5 0 0 1 0.50.5v5h5a0.50.5 0 0 1 0 1h-5v5a0.50.5 0 0 1-1 0v-5h-5a0.50.5 0 0 1 0-1h5v-5A0.50.5 0 0 1 8 2"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
