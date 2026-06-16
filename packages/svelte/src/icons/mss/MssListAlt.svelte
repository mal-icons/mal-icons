<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M270-286h60v-60h-60v60Zm0-164h60v-60h-60v60Zm0-164h60v-60h-60v60Zm162 328h244v-60H432v60Zm0-164h244v-60H432v60Zm0-164h244v-60H432v60ZM120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm0 0v-600 600Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
