<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M636-518 480-362 324-518l42-42 84 84v-204h60v204l84-84 42 42ZM398-125h164v-40H398v40ZM200-40v-880h560v880H200Zm60-150v90h440v-90H260Zm0-60h440v-520H260v520Zm0-580h440v-30H260v30Zm0 640v90-90Zm0-640v-30 30Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
