import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-circle-chev-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiCircleChevDown {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Circle Chev Down"}],["path",{"d":"M12.35,13.85a0.490.49,0,0,1-0.7,0l-3-3a0.50.5,0,0,1,0.7-0.7L12,12.79l2.65-2.64a0.50.5,0,0,1,0.70.7Z"}],["path",{"d":"M21.93,12A9.93,9.93,0,1,1,12,2.07,9.94,9.94,0,0,1,21.93,12ZM3.07,12A8.93,8.93,0,1,0,12,3.07,8.94,8.94,0,0,0,3.07,12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiCircleChevDown;
