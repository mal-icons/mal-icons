<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.2 20L20.8 12v8L12 24l-8.8-4zm8.8 4zm0-24L3.2 4V12l17.6-8L12 0zM3.8 12.28l7.59 3.45 8.8-4-7.59-3.45-8.8 4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
