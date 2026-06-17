<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 24l-32 64 32 48 32-48-32-64zm-64 96l-64 32 64 32 48-32-48-32zm128 0l-48 32 48 32 64-32-64-32zm-64 32c-32 128-64 192-128 256 16 0 48 0 64-16 0 16-16 48-32 64 16 0 48 0 64-16 16 16 16 16 32 48 16-32 16-32 32-48 16.85 12.06 48 16 64 16-16-16-32-48-32-64 16 16 48 16 64 16-64-64-96-128-128-256z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
