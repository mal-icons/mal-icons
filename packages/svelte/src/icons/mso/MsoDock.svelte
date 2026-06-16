<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M320-40v-60h320v60H320Zm-40-120q-24 0-42-18t-18-42v-640q0-24 18-42t42-18h400q24 0 42 18t18 42v640q0 24-18 42t-42 18H280Zm0-120v60h400v-60H280Zm0-60h400v-400H280v400Zm0-460h400v-60H280v60Zm0 0v-60 60Zm0 520v60-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
