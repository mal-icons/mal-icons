<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-290v-60h360v60H80Zm0-320v-60h360v60H80Zm488 443-42-42 112-111-112-111 42-42 112 111 111-111 42 42-111 111 111 111-42 42-111-111-112 111Zm94-367L526-670l42-42 93 93 177-177 42 43-218 219Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
