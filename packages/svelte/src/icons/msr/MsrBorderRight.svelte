<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-615v-60h60v60h-60Zm330 0v-60h60v60h-60Zm0 165v-60h60v60h-60Zm-330 0v-60h60v60h-60Zm165-330v-60h60v60h-60Zm-165 0v-60h60v60h-60Zm330 0v-60h60v60h-60Zm165 0v-60h60v60h-60ZM285-450v-60h60v60h-60Zm330 330v-60h60v60h-60Zm-165 0v-60h60v60h-60Zm359.83 0Q797-120 788.5-128.62T780-150v-660q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T840-810v660q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63ZM285-120v-60h60v60h-60ZM120-285v-60h60v60h-60Zm495-165v-60h60v60h-60ZM120-120v-60h60v60h-60Zm330-165v-60h60v60h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
