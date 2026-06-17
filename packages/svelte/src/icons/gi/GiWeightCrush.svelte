<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 16c-41.42 0-75 33.58-75 75 0 17.06 5.87 32.4 15.47 45H136L46 346h420l-90-210h-60.47C325.13 123.4 331 108.06 331 91c0-41.42-33.58-75-75-75zm0 30c24.85 0 45 20.15 45 45 0 24.85-20.15 45-45 45s-45-20.15-45-45c0-24.85 20.15-45 45-45zm-4.22 330A60 60 0 0 0 196 436a60 60 0 0 0 120 0 60 60 0 0 0-64.22-60z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
