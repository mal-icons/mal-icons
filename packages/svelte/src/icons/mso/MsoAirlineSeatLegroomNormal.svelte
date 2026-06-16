<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M660-120v-290H320q-28.87 0-49.44-20.56Q250-451.12 250-480v-360h220v250h220q28.88 0 49.44 20.56Q760-548.87 760-520v300h70q21 0 35.5 14.5T880-170q0 21-14.5 35.5T830-120H660ZM560-280H180q-24.75 0-42.37-17.62T120-340v-500h60v500h380v60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
