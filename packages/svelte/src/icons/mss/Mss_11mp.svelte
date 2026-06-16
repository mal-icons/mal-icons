<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M350-510h50v-240H286v50h64v190Zm213 0h50v-240H500v50h63v190ZM233-210h50v-190h53v127h50v-127h60v190h50v-240H233v240Zm323 0h50v-63h120v-177H556v240Zm50-113v-77h70v77h-70ZM120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm0 0v-600 600Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
