import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-closed-caption-disabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsClosedCaptionDisabled {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.83 4H21v14.17L17.83 15H18v-2h-1.5v0.5h-0.17l-1.83-1.83V10.5h2v0.5H18V9h-5v1.17L6.83 4zm12.95 18.61L17.17 20H3V5.83L1.39 4.22 2.8 2.81l18.38 18.38-1.4 1.42zM11 13.83l-0.83-0.83H9.5v0.5h-2v-3h0.17L6.17 9H6v6h5v-1.17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsClosedCaptionDisabled;
