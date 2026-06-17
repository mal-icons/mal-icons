<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M6.15 6.15a0.50.5 0 0 1 0.71 0L8 7.29l1.15-1.15a0.50.5 0 1 1 0.710.71L8.71 8l1.15 1.15a0.50.5 0 0 1-0.710.71L8 8.71 6.85 9.85a0.50.5 0 0 1-0.71-0.71L7.29 8 6.15 6.85a0.50.5 0 0 1 0-0.71"}],["path",{"d":"M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"}],["path",{"d":"M1 5v-0.5a0.50.5 0 0 1 1 0V5h0.5a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1 0-1zm0 3v-0.5a0.50.5 0 0 1 1 0V8h0.5a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1 0-1zm0 3v-0.5a0.50.5 0 0 1 1 0v0.5h0.5a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1 0-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
