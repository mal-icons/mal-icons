import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-decapcms",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDecapcms {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.95 13.18c0 3.26-2 5.65-4.74 5.65h-2.77v-5.65H6.28v10.39h7.93c5.4 0 9.79-4.67 9.79-10.39h-5.05ZM7.890.48 0 1.21l0.95 10.35 5.16-0.46-0.53-5.61 2.74-0.24c2.74-0.25 4.91 1.93 5.23 5.19l5.05-0.46c-0.49-5.75-5.3-10-10.7-9.51Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDecapcms;
