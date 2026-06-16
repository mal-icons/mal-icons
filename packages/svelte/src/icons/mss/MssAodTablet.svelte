<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M320-510v-40h320v40H320Zm40 120v-40h240v40H360ZM40-160v-640h880v640H40Zm150-60h580v-520H190v520Zm-90 0h30v-520h-30v520Zm730 0h30v-520h-30v520ZM100-740h30-30Zm730 0h30-30Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
