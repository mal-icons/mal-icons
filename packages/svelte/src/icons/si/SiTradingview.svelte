<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.87 8.28c0 1.35-1.1 2.45-2.45 2.45-1.35 0-2.45-1.1-2.45-2.45 0-1.35 1.1-2.45 2.45-2.45 1.35 0 2.45 1.1 2.45 2.45zM9.75 6H0v4.9h4.85v7.27H9.75Zm8.6 0H24l-5.11 12.17h-5.65z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
