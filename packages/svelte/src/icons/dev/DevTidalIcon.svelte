<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m300 300 100 100-100 100-100-100zM100 100l100 100-100 100L0 200zm400 0 100 100-100 100-100-100-100 100-100-100 100-100 100 100z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
