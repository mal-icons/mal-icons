import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-rename",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgRename {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M10 4H8V6H5C3.34 6 2 7.34 2 9V15C2 16.66 3.34 18 5 18H8V20H10V4ZM8 8V16H5C4.45 16 4 15.55 4 15V9C4 8.45 4.45 8 5 8H8Z","fill":"currentColor"}],["path",{"d":"M19 16H12V18H19C20.66 18 22 16.66 22 15V9C22 7.34 20.66 6 19 6H12V8H19C19.55 8 20 8.45 20 9V15C20 15.55 19.55 16 19 16Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgRename;
