<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-120v-60h720v60H120Zm0-163v-394h720v394H120Zm60-60h600v-274H180v274Zm-60-437v-60h720v60H120Zm60 437v-274 274Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
