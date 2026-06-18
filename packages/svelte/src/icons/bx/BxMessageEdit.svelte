<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 2H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h3v3.77L13.28 18H20c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm0 14h-7.28L9 18.23V16H4V4h16v12z"}],["path",{"d":"m13.8 9.19-1.4-1.4-3.87 3.86v1.4h1.4zm0.33-3.12 1.4 1.4-1.07 1.07-1.4-1.4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
