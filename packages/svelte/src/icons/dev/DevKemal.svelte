<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m301.4 96.1 3.3 7.20.4 393.3-3.7 7.3H0l49-399.2a10 10 0 0 1 9.8-8.6z"}],["path",{"fill":"currentColor","d":"M301.4 96.1v407.8H600l-49-399.2a10 10 0 0 0-9.8-8.6z"}],["path",{"fill":"currentColor","d":"M461.8 343.5h-13.1L448.5 96h11z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
