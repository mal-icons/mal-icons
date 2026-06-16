<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M240-120h480v-60H510v-339l78 78 46-46-154-154-154 154 46 46 78-78v339H240v60Zm240-360ZM80-328v-512h800v512H610v-60h210v-392H140v392h210v60H80Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
