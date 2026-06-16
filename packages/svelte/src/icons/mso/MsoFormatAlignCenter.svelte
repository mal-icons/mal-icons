<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-120v-60h720v60H120Zm164-165v-60h393v60H284ZM120-450v-60h720v60H120Zm164-165v-60h393v60H284ZM120-780v-60h720v60H120Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
