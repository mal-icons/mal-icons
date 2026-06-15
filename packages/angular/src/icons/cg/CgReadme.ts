import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-readme",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgReadme {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4 5.5H9C10.1 5.5 11 6.4 11 7.5V16.5C11 17.05 10.55 17.5 10 17.5H4C3.45 17.5 3 17.05 3 16.5V6.5C3 5.95 3.45 5.5 4 5.5ZM14 19.5C13.65 19.5 13.31 19.44 13 19.33V19.5C13 20.05 12.55 20.5 12 20.5C11.45 20.5 11 20.05 11 19.5V19.33C10.69 19.44 10.35 19.5 10 19.5H4C2.34 19.5 1 18.16 1 16.5V6.5C1 4.84 2.34 3.5 4 3.5H9C10.19 3.5 11.27 4.02 12 4.85C12.73 4.02 13.81 3.5 15 3.5H20C21.66 3.5 23 4.84 23 6.5V16.5C23 18.16 21.66 19.5 20 19.5H14ZM13 7.5V16.5C13 17.05 13.45 17.5 14 17.5H20C20.55 17.5 21 17.05 21 16.5V6.5C21 5.95 20.55 5.5 20 5.5H15C13.9 5.5 13 6.4 13 7.5ZM5 7.5H9V9.5H5V7.5ZM15 7.5H19V9.5H15V7.5ZM19 10.5H15V12.5H19V10.5ZM5 10.5H9V12.5H5V10.5ZM19 13.5H15V15.5H19V13.5ZM5 13.5H9V15.5H5V13.5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgReadme;
