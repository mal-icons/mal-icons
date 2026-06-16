<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M270-150v-150q0-12.75 8.63-21.37T300-330h150v-150q0-12.75 8.63-21.37T480-510h150v-150q0-12.75 8.63-21.37T660-690h150v-120q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T870-810v150q0 12.75-8.62 21.38T840-630H690v150q0 12.75-8.62 21.38T660-450H510v150q0 12.75-8.62 21.38T480-270H330v150q0 12.75-8.62 21.38T300-90H150q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T150-150h120Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
