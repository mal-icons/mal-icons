<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 8.5h2.79l0.850.85A0.50.5 0 0 0 13 9.5h1a0.50.5 0 0 0 0.5-0.5V8a0.50.5 0 0 0-0.5-0.5H9z"}],["path",{"d":"M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4M8 7a4 4 0 0 0-1.35-3H12a3 3 0 0 1 3 3v6H8zm-3.410.16C4.42 7.09 4.22 7 4 7s-0.420.09-0.580.16C3.16 7.26 3 7.33 3 7a1 1 0 0 1 2 0c0 0.33-0.160.26-0.410.16"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
