import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-test-tube-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTestTubeFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 2V4H16V18C16 20.21 14.21 22 12 22C9.79 22 8 20.21 8 18V4H7V2H17ZM13 15C12.45 15 12 15.45 12 16C12 16.55 12.45 17 13 17C13.55 17 14 16.55 14 16C14 15.45 13.55 15 13 15ZM11 12C10.45 12 10 12.45 10 13C10 13.55 10.45 14 11 14C11.55 14 12 13.55 12 13C12 12.45 11.55 12 11 12ZM14 4H10V8H14V4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTestTubeFill;
