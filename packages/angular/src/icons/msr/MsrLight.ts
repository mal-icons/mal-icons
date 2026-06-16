import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-light",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrLight {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-120q-63 0-106.5-43.5T330-270H180q-24 0-42-18t-18-42q0-152 93.5-258T450-705v-105q0-13 8.5-21.5T480-840q13 0 21.5 8.5T510-810v105q143 11 236.5 117T840-330q0 24-18 42t-42 18H630q0 63-43.5 106.5T480-120ZM180-330h600q0-132-87.5-223.5T480-645q-125 0-212.5 91.5T180-330Zm300 150q38 0 64-26t26-64H390q0 38 26 64t64 26Zm0-90Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrLight;
