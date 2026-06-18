<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 18h2v4.08L11.1 18H16c1.1 0 2-0.9 2-2V8c0-1.1-0.9-2-2-2H4c-1.1 0-2 0.9-2 2v8c0 1.10.9 2 2 2z"}],["path",{"d":"M20 2H8c-1.1 0-2 0.9-2 2h12c1.1 0 2 0.9 2 2v8c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
