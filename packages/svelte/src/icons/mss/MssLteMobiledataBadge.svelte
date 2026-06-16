<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M160-320h183v-60H220v-260h-60v320Zm248 0h60v-260h85v-60H323v60h85v260Zm209 0h183v-60H677v-70h83v-60h-83v-70h123v-60H617v320ZM40-120v-720h880v720H40Zm60-60h760v-600H100v600Zm0 0v-600 600Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
