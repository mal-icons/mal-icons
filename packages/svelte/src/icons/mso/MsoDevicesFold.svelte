<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M470-120q-24.75 0-42.37-17.62T410-180v-625q0-17.9 9.5-32.45Q429-852 446-860l126-55q35-15 66.5 3t31.5 59v13h150q24.75 0 42.38 17.63T880-780v600q0 24.75-17.62 42.38T820-120H470Zm0-96 140-60v-589l-140 60v589Zm67 36h283v-600H670v497q0 21.08-11.37 39.09T628-218l-91 38ZM80-780v-60h60v60H80Zm0 660v-60h60v60H80Zm0-165v-60h60v60H80Zm0-165v-60h60v60H80Zm0-165v-60h60v60H80Zm165-165v-60h60v60h-60Zm0 660v-60h60v60h-60Zm225-96v-589 589Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
