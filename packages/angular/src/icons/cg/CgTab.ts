import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-tab",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgTab {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M19 4C20.66 4 22 5.34 22 7V17C22 18.66 20.66 20 19 20H5C3.34 20 2 18.66 2 17V7C2 5.34 3.34 4 5 4H19ZM20 9.62H13C12.45 9.62 11.84 9.21 11.65 8.69L10.65 6H5C4.45 6 4 6.45 4 7V17C4 17.55 4.45 18 5 18H19C19.55 18 20 17.55 20 17V9.62Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgTab;
