<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M7,14 C7.55,14 8,13.55 8,13 C8,12.45 7.55,12 7,12 C6.45,12 6,12.45 6,13 C6,13.55 6.45,14 7,14 Z M17,14 C17.55,14 18,13.55 18,13 C18,12.45 17.55,12 17,12 C16.45,12 16,12.45 16,13 C16,13.55 16.45,14 17,14 Z M12,16 C12.5,16 13,15.68 13,15 C13,14.89 11,14.92 11,15 C11,15.68 11.5,16 12,16 Z M3,24 C3,24 3,16 3,12 C3,8 2.55,4 12,4 C21.45,4 21,8 21,12 C21,16 21,24 21,24 M20.07,7 C23.33,7 23.65,3.42 22.11,1.89 C20.58,0.35 17,0.67 17,3.93 M7,19 C7,18.8 9.5,20.15 12,20 C14.5,20.15 17,18.5 17,19 C17,19.8 15.5,21 12,21 C8.5,21 7,19.51 7,19 Z M3.94,7 C0.6,7 0.38,3.42 1.91,1.89 C3.44,0.35 7,0.67 7,3.93"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
