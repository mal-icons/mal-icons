import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-toolbar-top",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgToolbarTop {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 11H6V9H18V11Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 16C2 17.66 3.34 19 5 19H19C20.66 19 22 17.66 22 16V8C22 6.34 20.66 5 19 5H5C3.34 5 2 6.34 2 8V16ZM5 17H19C19.55 17 20 16.55 20 16V8C20 7.45 19.55 7 19 7H5C4.45 7 4 7.45 4 8V16C4 16.55 4.45 17 5 17Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgToolbarTop;
