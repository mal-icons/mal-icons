<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h300v60H180v600h600v-300h60v300q0 24-18 42t-42 18H180Zm480-420v-120H540v-60h120v-120h60v120h120v60H720v120h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
