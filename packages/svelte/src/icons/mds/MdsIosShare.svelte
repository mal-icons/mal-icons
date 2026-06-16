<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 8h-5v2h3v11H6V10h3V8H4v15h16z"}],["path",{"d":"M11 16h2V5h3l-4-4-4 4h3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
