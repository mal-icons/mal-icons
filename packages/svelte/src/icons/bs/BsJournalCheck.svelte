<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M10.85 6.15a0.50.5 0 0 1 0 0.71l-3 3a0.50.5 0 0 1-0.71 0l-1.5-1.5a0.50.5 0 1 1 0.71-0.71L7.5 8.79l2.65-2.65a0.50.5 0 0 1 0.71 0"}],["path",{"d":"M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"}],["path",{"d":"M1 5v-0.5a0.50.5 0 0 1 1 0V5h0.5a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1 0-1zm0 3v-0.5a0.50.5 0 0 1 1 0V8h0.5a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1 0-1zm0 3v-0.5a0.50.5 0 0 1 1 0v0.5h0.5a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1 0-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
