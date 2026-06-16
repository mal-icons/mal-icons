import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-graphic-eq",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrGraphicEq {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M314.83-240Q302-240 293.5-248.62T285-270v-420q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T345-690v420q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63Zm165 160Q467-80 458.5-88.62T450-110v-740q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T510-850v740q0 12.75-8.68 21.38Q492.65-80 479.83-80Zm-330-320Q137-400 128.5-408.62T120-430v-100q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T180-530v100q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63Zm495 160Q632-240 623.5-248.62T615-270v-420q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T675-690v420q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63Zm165-160Q797-400 788.5-408.62T780-430v-100q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T840-530v100q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrGraphicEq;
