<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M14 2.5a0.50.5 0 0 0-0.5-0.5h-6a0.50.5 0 0 0 0 1h4.79L2.15 13.15a0.50.5 0 0 0 0.710.71L13 3.71V8.5a0.50.5 0 0 0 1 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
