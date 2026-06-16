<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m80-280 162-400h63l161 400h-63l-38-99H181l-38 99H80Zm121-151h144l-70-185h-4l-70 185Zm347 151v-62l233-286H566v-52h272v63L607-332h233v52H548ZM384-784l96-96 96 96H384Zm96 704-96-96h192l-96 96Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
