<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M320-120v-60h130v-185q-99-14-154.5-79.7Q240-510.4 240-600v-240h480v240q0 90-55.5 155.5T510-365v185h130v60H320Zm159.86-300Q549-420 600.5-467.5T658-570H302q5 55 56.86 102.5t121 47.5ZM300-630h360v-150H300v150Zm180 210Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
