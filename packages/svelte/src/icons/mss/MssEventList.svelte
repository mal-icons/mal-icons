<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M560-120v-320h320v320H560Zm60-60h200v-200H620v200ZM80-250v-60h360v60H80Zm480-270v-320h320v320H560Zm60-60h200v-200H620v200ZM80-650v-60h360v60H80Zm640 370Zm0-400Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
