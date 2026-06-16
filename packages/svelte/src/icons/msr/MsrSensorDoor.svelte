<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M230-90q-24.75 0-42.37-17.62T170-150v-660q0-24.75 17.63-42.37T230-870h500q24.75 0 42.38 17.63T790-810v660q0 24.75-17.62 42.38T730-90H230Zm0-60h500v-660H230v660Zm390.5-280q20.5 0 35-15t14.5-35.5q0-20.5-14.58-35Q640.83-530 620-530q-20 0-35 14.58-15 14.58-15 35.42 0 20 15 35t35.5 15ZM230-810v660-660Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
