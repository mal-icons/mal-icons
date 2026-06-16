<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M437-80q-24 0-42-17.62T377-140v-200H220q-24 0-42-18t-18-42v-303q0-55 39.66-96T295-840h505v440q0 24-18 42t-42 18H583v200q0 24.75-18 42.38T523-80h-86ZM220-554h520v-226h-56v141q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T624-639v-141h-71v55q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T493-725v-55H295q-32 0-53.5 23T220-703v149Zm0 154h520v-94H220v94Zm0-94v94-94Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
