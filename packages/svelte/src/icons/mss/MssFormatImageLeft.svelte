<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-120v-60h720v60H120Zm0-155v-410h410v410H120Zm0-505v-60h720v60H120Zm60 445h290v-290H180v290Zm440 50v-60h220v60H620Zm0-165v-60h220v60H620Zm0-165v-60h220v60H620Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
