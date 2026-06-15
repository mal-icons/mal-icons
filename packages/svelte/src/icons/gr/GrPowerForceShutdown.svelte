<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M12,21 C16.97,21 21,16.97 21,12 C21,7.03 16.97,3 12,3 C7.03,3 3,7.03 3,12 C3,16.97 7.03,21 12,21 Z M12,8 L12,16"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
