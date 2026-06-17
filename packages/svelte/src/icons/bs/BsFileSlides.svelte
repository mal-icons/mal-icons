<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 4a0.50.5 0 0 0-0.50.44l-0.5 4A0.50.5 0 0 0 4.5 9h3v2.02c-0.860.06-1.50.25-1.50.48 0 0.280.90.5 2 0.5s2-0.22 2-0.5c0-0.23-0.64-0.43-1.5-0.48V9h3a0.50.5 0 0 0 0.5-0.56l-0.5-4A0.50.5 0 0 0 11 4zm2 3.78V5.22c0-0.10.11-0.160.19-0.11l2.13 1.28a0.130.13 0 0 1 0 0.21l-2.13 1.28A0.130.13 0 0 1 7 7.78z"}],["path",{"d":"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
