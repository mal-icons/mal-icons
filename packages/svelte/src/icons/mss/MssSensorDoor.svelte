<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M160-80v-800h640v800H160Zm60-60h520v-680H220v680Zm400.5-290q20.5 0 35-15t14.5-35.5q0-20.5-14.58-35Q640.83-530 620-530q-20 0-35 14.58-15 14.58-15 35.42 0 20 15 35t35.5 15ZM220-140v-680 680Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
