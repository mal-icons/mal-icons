import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-edit-straight",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgEditStraight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4C15.87 4 19 7.13 19 11H5C5 7.13 8.13 4 12 4Z","fill":"currentColor"}],["path",{"d":"M5 13H1V11H5V13Z","fill":"currentColor"}],["path",{"d":"M19 13C19 16.87 15.87 20 12 20C8.13 20 5 16.87 5 13H19Z","fill":"currentColor"}],["path",{"d":"M19 13V11H23V13H19Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgEditStraight;
