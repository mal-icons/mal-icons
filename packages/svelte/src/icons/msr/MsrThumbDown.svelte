<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M105-328q-24 0-42-18t-18-42v-81.84Q45-477 43.5-484.5T45-499l126-290q8.88-21.25 29.6-36.12Q221.31-840 244-840h444v512L463-90q-13.6 14-32.19 16.5Q412.23-71 395-81q-17-10-25.5-27.5t-4.2-36.5L404-328H105Zm523-25v-427H231L105-481v93h373l-53 249 203-214Zm193-487q24.75 0 42.38 17.63T881-780v392q0 24.75-17.62 42.38T821-328H688v-60h133v-392H688v-60h133Zm-193 60v427-427Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
