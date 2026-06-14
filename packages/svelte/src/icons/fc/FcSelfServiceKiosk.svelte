<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"#546E7A","d":"M44,30H4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4V30z"}],["path",{"fill":"#64B5F6","d":"M40,27H8c-0.6,0-1-0.4-1-1V11c0-0.6,0.4-1,1-1h32c0.6,0,1,0.4,1,1v15C41,26.6,40.6,27,40,27z"}],["path",{"fill":"#78909C","d":"M40,41H8c-2.2,0-4-1.8-4-4v-7h40v7C44,39.2,42.2,41,40,41z"}],["rect",{"fill":"#37474F","x":"27","y":"34","width":"12","height":"2"}],["rect",{"fill":"#37474F","x":"9","y":"34","width":"12","height":"2"}],["path",{"fill":"#37474F","d":"M18,35c0,1.1-1.3,2-3,2s-3-0.9-3-2H18z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 48 48" {nodes} {...props} />
