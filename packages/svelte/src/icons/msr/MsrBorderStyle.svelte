<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M615-120v-60h60v60h-60Zm165 0v-60h60v60h-60Zm-495 0v-60h60v60h-60Zm165 0v-60h60v60h-60Zm330-165v-60h60v60h-60Zm0-165v-60h60v60h-60ZM120-120v-660q0-24.75 17.63-42.37T180-840h660v60H180v660h-60Zm660-495v-60h60v60h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
