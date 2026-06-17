<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M13 8a0.50.5 0 0 0-0.5-0.5H5.71l2.15-2.15a0.50.5 0 1 0-0.71-0.71l-3 3a0.50.5 0 0 0 0 0.71l3 3a0.50.5 0 0 0 0.71-0.71L5.71 8.5H12.5A0.50.5 0 0 0 13 8"}],["path",{"fill-rule":"evenodd","d":"M3.5 4a0.50.5 0 0 0-0.50.5v7a0.50.5 0 0 0 1 0v-7a0.50.5 0 0 0-0.5-0.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
