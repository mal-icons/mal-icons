import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-brush",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgBrush {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M15 11H18C18.55 11 19 11.45 19 12V18C19 19.66 17.66 21 16 21H8C6.34 21 5 19.66 5 18V12C5 11.45 5.45 11 6 11H9V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V11ZM13 6C13 5.45 12.55 5 12 5C11.45 5 11 5.45 11 6V13H7V18C7 18.55 7.45 19 8 19H9V16H11V19H13V16H15V19H16C16.55 19 17 18.55 17 18V13H13V6Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgBrush;
