<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M299.6 330a120 120 0 1 0 0-240 120 120 0 0 0 0 240"}],["path",{"fill":"currentColor","d":"M300.4 390h-0.4a180 180 0 0 1-174.5-135.6c-6-24-25.6-44.3-50.3-44.3H0a300 300 0 0 0 300 300h0.4z"}],["path",{"fill":"currentColor","d":"M299.6 390h0.4a180 180 0 0 0 174.5-135.6c6-24 25.6-44.3 50.3-44.3H600a300 300 0 0 1-300 300h-0.4z"}],["path",{"fill":"currentColor","d":"M512.1 422.1a300 300 0 0 1-424.2 0l84.8-84.8a180 180 0 0 0 254.6 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
