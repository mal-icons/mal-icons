<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M10.85 5.15a0.50.5 0 0 1 0 0.71l-3 3a0.50.5 0 0 1-0.71 0l-1.5-1.5a0.50.5 0 1 1 0.71-0.71L7.5 7.79l2.65-2.65a0.50.5 0 0 1 0.71 0"}],["path",{"d":"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a0.50.5 0 0 1-0.780.42L8 13.1l-5.22 2.82A0.50.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.57l4.72-2.48a0.50.5 0 0 1 0.55 0L13 14.57V2a1 1 0 0 0-1-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
