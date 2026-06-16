import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-cancel-schedule-send",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfCancelScheduleSend {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.5 9c-0.42 0-0.830.04-1.240.11L1.01 3 1 10l9 2-9 2 0.01 7 8.07-3.46C9.59 21.19 12.71 24 16.5 24c4.14 0 7.5-3.36 7.5-7.5S20.64 9 16.5 9zm0 13c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z"}],["path",{"d":"m18.27 14.03-1.77 1.76-1.77-1.76-0.70.7 1.76 1.77-1.76 1.770.70.7 1.77-1.76 1.77 1.760.7-0.7-1.76-1.77 1.76-1.77z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfCancelScheduleSend;
