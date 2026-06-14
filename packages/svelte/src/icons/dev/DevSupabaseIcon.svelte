<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M349.3 590a26.2 26.2 0 0 1-46.8-15.9l-5.4-360.5h242.4a52.5 52.5 0 0 1 41.1 85.1z"}],["path",{"fill":"currentColor","fill-opacity":".2","d":"M349.3 590a26.2 26.2 0 0 1-46.8-15.9l-5.4-360.5h242.4a52.5 52.5 0 0 1 41.1 85.1z"}],["path",{"fill":"currentColor","d":"M250.7 10a26.2 26.2 0 0 1 46.8 15.9l2.4 360.5H60.5c-44 0-68.4-50.7-41.1-85.1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
