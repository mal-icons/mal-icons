<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M534.4 0H65.6v539.8z"}],["path",{"fill":"currentColor","d":"M65.6 225v314.8L289.4 282a466 466 0 0 0-223.8-57"}],["path",{"fill":"currentColor","d":"M337.7 312.3 108.1 576.7 87.8 600H525a469 469 0 0 0-187.3-287.7"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
