import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-find-in-page",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdFindInPage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 2H6c-1.1 0-1.990.9-1.99 2L4 20c0 1.10.89 2 1.99 2H18c1.1 0 2-0.9 2-2V8l-6-6zM6 4h7l5 5v8.58l-1.84-1.84a4.99 4.99 0 0 0-0.64-6.28A4.96 4.96 0 0 0 12 8a5 5 0 0 0-3.53 1.46 4.98 4.98 0 0 0 0 7.05 4.98 4.98 0 0 0 6.280.63L17.6 20H6V4zm8.11 11.1c-0.560.56-1.310.88-2.110.88s-1.55-0.31-2.11-0.88c-0.56-0.56-0.88-1.31-0.88-2.11s0.31-1.550.88-2.11c0.56-0.57 1.31-0.88 2.11-0.88s1.550.31 2.110.88c0.560.560.88 1.310.88 2.11s-0.31 1.55-0.88 2.11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdFindInPage;
