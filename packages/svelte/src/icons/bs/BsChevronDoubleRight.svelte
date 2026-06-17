<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M3.65 1.65a0.50.5 0 0 1 0.71 0l6 6a0.50.5 0 0 1 0 0.71l-6 6a0.50.5 0 0 1-0.71-0.71L9.29 8 3.65 2.35a0.50.5 0 0 1 0-0.71"}],["path",{"fill-rule":"evenodd","d":"M7.65 1.65a0.50.5 0 0 1 0.71 0l6 6a0.50.5 0 0 1 0 0.71l-6 6a0.50.5 0 0 1-0.71-0.71L13.29 8 7.65 2.35a0.50.5 0 0 1 0-0.71"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
