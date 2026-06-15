import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-arrows-expand-up-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgArrowsExpandUpRight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 5V3L21 3V11H19V6.41L13.64 11.78C13.25 12.17 12.61 12.17 12.22 11.78C11.83 11.39 11.83 10.75 12.22 10.36L17.59 5L13 5Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M5 13C3.9 13 3 13.9 3 15L3 19C3 20.1 3.9 21 5 21H9C10.1 21 11 20.1 11 19V15C11 13.9 10.1 13 9 13H5ZM5 15L5 19H9V15H5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgArrowsExpandUpRight;
