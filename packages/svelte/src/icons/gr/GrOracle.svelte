<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M7.96,18.91 C4.12,18.91 1,15.8 1,11.96 C1,8.12 4.12,5 7.96,5 L16.04,5 C19.89,5 23,8.12 23,11.96 C23,15.8 19.89,18.91 16.04,18.91 L7.96,18.91 L7.96,18.91 Z M15.86,16.46 C18.35,16.46 20.37,14.45 20.37,11.96 C20.37,9.47 18.35,7.45 15.86,7.45 L8.14,7.45 C5.65,7.45 3.63,9.47 3.63,11.96 C3.63,14.45 5.65,16.46 8.14,16.46 L15.86,16.46 L15.86,16.46 Z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
