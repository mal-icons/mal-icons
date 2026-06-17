<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 5v1.5h2.25V12h1.5V6.5H11V5z"}],["path",{"d":"M9.050.44c-0.58-0.58-1.52-0.58-2.1 0L0.44 6.95c-0.580.58-0.58 1.52 0 2.1l6.52 6.52c0.580.58 1.520.58 2.1 0l6.52-6.52c0.58-0.580.58-1.52 0-2.1zm-1.40.7a0.50.5 0 0 1 0.7 0l6.52 6.52a0.50.5 0 0 1 0 0.7L8.35 14.87a0.50.5 0 0 1-0.7 0L1.13 8.35a0.50.5 0 0 1 0-0.7L7.65 1.13Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
