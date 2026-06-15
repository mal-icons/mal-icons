<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M11.92 16.71L11.57 17.07L11.21 16.71L7 12.5L7.71 11.79L11.07 15.15V7H12.07V15.15L15.42 11.79L16.13 12.5L11.92 16.71Z","fill":"currentColor"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
