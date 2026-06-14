<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 1024 1024" {nodes} {...props} />
