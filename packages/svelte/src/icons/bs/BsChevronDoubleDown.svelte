<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M1.65 6.65a0.50.5 0 0 1 0.71 0L8 12.29l5.65-5.65a0.50.5 0 0 1 0.710.71l-6 6a0.50.5 0 0 1-0.71 0l-6-6a0.50.5 0 0 1 0-0.71"}],["path",{"fill-rule":"evenodd","d":"M1.65 2.65a0.50.5 0 0 1 0.71 0L8 8.29l5.65-5.65a0.50.5 0 0 1 0.710.71l-6 6a0.50.5 0 0 1-0.71 0l-6-6a0.50.5 0 0 1 0-0.71"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
