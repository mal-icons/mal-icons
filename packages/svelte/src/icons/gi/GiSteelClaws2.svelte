<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M20.11 16.7h120.31l300.66 207.21 56.39 134-138.88-96-7.06-16.79zM309 423.3l-56.39-134-238.08-164.09v94.45zm-48.47-146.43l10.79 25.64 128.76 89-56.39-134-329.16-226.8v76.64z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
