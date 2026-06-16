<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-390v-60h213v60H80Zm275 0v-60h212v60H355Zm272 0v-60h213v60H627ZM80-510v-60h760v60H80Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
