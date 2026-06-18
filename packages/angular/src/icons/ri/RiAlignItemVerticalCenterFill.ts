import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-align-item-vertical-center-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiAlignItemVerticalCenterFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 19C4 19.55 4.45 20 5 20H10C10.55 20 11 19.55 11 19V13H13V17C13 17.55 13.45 18 14 18H19C19.55 18 20 17.55 20 17V13H22V11H20V7C20 6.45 19.55 6 19 6L14 6C13.45 6 13 6.45 13 7V11H11V5C11 4.45 10.55 4 10 4H5C4.45 4 4 4.45 4 5L4 11H2V13H4L4 19Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiAlignItemVerticalCenterFill;
