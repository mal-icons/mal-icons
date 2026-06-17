<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M7.65 2.65a0.50.5 0 0 1 0.71 0l6 6a0.50.5 0 0 1-0.710.71L8 3.71 2.35 9.35a0.50.5 0 1 1-0.71-0.71z"}],["path",{"fill-rule":"evenodd","d":"M7.65 6.65a0.50.5 0 0 1 0.71 0l6 6a0.50.5 0 0 1-0.710.71L8 7.71l-5.65 5.65a0.50.5 0 0 1-0.71-0.71z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
