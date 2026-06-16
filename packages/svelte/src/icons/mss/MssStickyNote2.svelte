<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M180-180h400v-200h200v-400H180v600Zm-60 60v-720h720v480L600-120H120Zm180-300v-60h170v60H300Zm0-160v-60h360v60H300ZM180-180v-600 600Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
