<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M700-60v-140H560v-60h140v-140h60v140h140v60H760v140h-60ZM200-200v-200h60v140h140v60H200Zm0-360v-200h200v60H260v140h-60Zm500 0v-140H560v-60h200v200h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
