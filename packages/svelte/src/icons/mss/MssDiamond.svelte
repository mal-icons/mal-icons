<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M480-120 80-600l120-240h560l120 240-400 480ZM368-630h224l-75-150h-74l-75 150Zm82 381v-321H183l267 321Zm60 0 267-321H510v321Zm149-381h136l-75-150H584l75 150Zm-494 0h136l75-150H240l-75 150Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
