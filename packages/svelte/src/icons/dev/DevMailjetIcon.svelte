<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m0 230.8 219 99.3 44-43.8-112.1-50.9 347.3-133-133.5 345.8-50.6-111-44.3 44 2.3 5.1 97 212.5L600 1.2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
