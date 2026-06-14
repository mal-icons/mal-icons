<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M216.7 35.5h65.6v136.1h-65.6zm0 279.6h65.6v136.2h-65.6zM111.4 147.4H177V600h-65.6zm208.5 280h65.6v136.2h-65.6zm0-279.8h65.6v136.1h-65.6zM423 0h65.6v452.6H423z"}],["path",{"fill":"currentColor","d":"M282.3 211.4h-65.6v64.2h65.6z"}],["path",{"fill":"currentColor","d":"M385.5 323.5h-65.6v64.2h65.6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
