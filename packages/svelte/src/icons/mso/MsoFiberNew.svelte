<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M100-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h760q24.75 0 42.38 18T920-740v520q0 24-17.62 42T860-160H100Zm0-60h760v-520H100v520Zm30-137h45v-170l116 170h43v-246h-45v170L175-603h-45v246Zm249 0h157v-45H429v-54h107v-45H429v-56h107v-46H379v246Zm248 0h170q14.45 0 24.23-9.49Q831-375.97 831-390v-213h-45v196h-53v-155h-45v155h-49v-196h-45v213q0 14.03 9.49 23.51Q612.98-357 627-357ZM100-220v-520 520Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
