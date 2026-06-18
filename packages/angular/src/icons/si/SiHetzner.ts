import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-hetzner",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHetzner {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 0v24h24V0H0zm4.6 4.03h2.24c0.51 0 0.720.220.720.72v5.64h8.88v-5.64c0-0.510.22-0.720.72-0.72h2.23c0.5 0 0.710.230.720.72v14.52c0 0.51-0.210.72-0.720.72h-2.23c-0.51 0-0.72-0.21-0.72-0.72v-5.73H7.56v5.74c0 0.52-0.210.72-0.720.72H4.6c-0.51 0-0.72-0.21-0.72-0.72V4.74c0-0.510.21-0.720.72-0.72z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHetzner;
