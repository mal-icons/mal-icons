import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-trash-empty",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgTrashEmpty {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M17 6V5C17 3.9 16.1 3 15 3H9C7.9 3 7 3.9 7 5V6H4C3.45 6 3 6.45 3 7C3 7.55 3.45 8 4 8H5V19C5 20.66 6.34 22 8 22H16C17.66 22 19 20.66 19 19V8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H17ZM15 5H9V6H15V5ZM17 8H7V19C7 19.55 7.45 20 8 20H16C16.55 20 17 19.55 17 19V8Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgTrashEmpty;
