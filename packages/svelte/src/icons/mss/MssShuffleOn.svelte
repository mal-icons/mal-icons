<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M40-40v-881h881v881H40Zm356-484 43-43-245-244-43 43 245 244Zm186 374h229v-229h-60v127L565-436l-42 43 184 183H582v60Zm-389 0 558-558v126h60v-229H582v60h127L151-193l42 43Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
