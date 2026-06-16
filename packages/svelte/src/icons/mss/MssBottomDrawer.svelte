<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-120v-720h720v720H120Zm60-660v370l59-59h482l59 59v-370H180Zm0 600h600v-145l-84-84H264l-84 84v145Zm0 0h600-600Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
