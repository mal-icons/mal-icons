<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m0 0.97 4.11 6.45v4.09h2.64v-4.09L11.050.97H8.21L5.58 5.13 2.970.97Zm12.090.02-4.47 10.54h2.11l0.97-2.35h4.78l0.8 2.35h2.26L14.260.99Zm1.13 2.23 1.46 3.87h-3.1zm3.06 9.48v10.29H24v-2.2h-5.45v-8.09zm-12.170v10.34h2.22v-7.13l2.32 4.79h1.75l2.4-4.96v7.3h2.13V12.7h-2.9L9.44 17.37l-2.45-4.67Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
