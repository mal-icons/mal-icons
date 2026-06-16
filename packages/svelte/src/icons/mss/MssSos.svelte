<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M340-280v-400h280v400H340Zm-300 0v-60h180v-110H40v-230h240v60H100v110h180v230H40Zm640 0v-60h180v-110H680v-230h240v60H740v110h180v230H680Zm-280-60h160v-280H400v280Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
