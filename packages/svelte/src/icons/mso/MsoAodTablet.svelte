<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M320-510v-40h320v40H320Zm40 120v-40h240v40H360ZM100-160q-24.75 0-42.37-17.62T40-220v-520q0-24.75 17.63-42.37T100-800h760q24.75 0 42.38 17.63T920-740v520q0 24.75-17.62 42.38T860-160H100Zm30-580h-30v520h30v-520Zm60 520h580v-520H190v520Zm640-520v520h30v-520h-30Zm0 0h30-30Zm-700 0h-30 30Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
