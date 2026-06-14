<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"#FFC107","d":"M21.2,44.8l-18-18c-1.6-1.6-1.6-4.1,0-5.7l18-18c1.6-1.6,4.1-1.6,5.7,0l18,18c1.6,1.6,1.6,4.1,0,5.7l-18,18 C25.3,46.4,22.7,46.4,21.2,44.8z"}],["circle",{"fill":"#37474F","cx":"24","cy":"24","r":"2"}],["circle",{"fill":"#37474F","cx":"32","cy":"24","r":"2"}],["circle",{"fill":"#37474F","cx":"16","cy":"24","r":"2"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 48 48" {nodes} {...props} />
