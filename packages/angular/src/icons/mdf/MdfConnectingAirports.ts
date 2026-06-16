import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-connecting-airports",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfConnectingAirports {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m15.4 17 1.3 4.4h-1.1L13 17h-3c-0.55 0-1-0.45-1-1s0.45-1 1-1h3l2.6-4.4h1.1L15.4 15h2.85l0.75-1h1l-0.6 2 0.6 2h-1l-0.75-1H15.4zM5.75 7 5 6H4l0.6 2-0.6 2h1l0.75-1H8.6l-1.3 4.4h1.1L11 9h3c0.55 0 1-0.45 1-1s-0.45-1-1-1h-3L8.4 2.6H7.3L8.6 7H5.75z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfConnectingAirports;
