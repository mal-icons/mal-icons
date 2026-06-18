<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 1.61 0 22.39h1.67L12 4.59v2.93l-8.61 14.87H5.11L12 10.51v2.99l-5.17 8.9h1.72L12 16.48v2.93l-1.72 2.99H24Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
