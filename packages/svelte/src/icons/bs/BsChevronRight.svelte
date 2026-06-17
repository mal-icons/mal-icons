<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M4.65 1.65a0.50.5 0 0 1 0.71 0l6 6a0.50.5 0 0 1 0 0.71l-6 6a0.50.5 0 0 1-0.71-0.71L10.29 8 4.65 2.35a0.50.5 0 0 1 0-0.71"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
