import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-test-tube-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTestTubeLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 2V4H16V18C16 20.21 14.21 22 12 22C9.79 22 8 20.21 8 18V4H7V2H17ZM14 10H10V18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18V10ZM13 15C13.55 15 14 15.45 14 16C14 16.55 13.55 17 13 17C12.45 17 12 16.55 12 16C12 15.45 12.45 15 13 15ZM11 12C11.55 12 12 12.45 12 13C12 13.55 11.55 14 11 14C10.45 14 10 13.55 10 13C10 12.45 10.45 12 11 12ZM14 4H10V8H14V4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTestTubeLine;
