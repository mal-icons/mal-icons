<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M12,21 C15.52,21 18.57,18.98 20.05,16.03 C20.66,14.82 21,13.45 21,12 C21,10.57 20.67,9.21 20.07,8.01 C18.6,5.04 15.54,3 12,3 C7.03,3 3,7.03 3,12 C3,16.97 7.03,21 12,21 Z M20,9 L12,9 C10.34,9 9,10.34 9,12 C9,13.66 10.34,15 12,15 L20,15"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
