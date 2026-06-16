<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m574-327-42-42 112-112-112-112 42-42 112 112 112-112 42 42-112 112 112 112-42 42-112-112-112 112ZM220-40q-24.75 0-42.37-17.62T160-100v-760q0-24.75 17.63-42.37T220-920h440q24.75 0 42.38 17.63T720-860v146h-60v-56H220v580h440v-56h60v146q0 24.75-17.62 42.38T660-40H220Zm0-90v30h440v-30H220Zm0-700h440v-30H220v30Zm0 0v-30 30Zm0 700v30-30Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
