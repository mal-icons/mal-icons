<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M201-120v-630h-41v-60h188v-30h264v30h188v60h-41v630H201Zm60-60h438v-570H261v570Zm106-86h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
