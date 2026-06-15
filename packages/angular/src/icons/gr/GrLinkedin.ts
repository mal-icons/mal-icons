import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-linkedin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrLinkedin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M20.45,20.45 L16.89,20.45 L16.89,14.88 C16.89,13.55 16.87,11.84 15.04,11.84 C13.19,11.84 12.91,13.29 12.91,14.79 L12.91,20.45 L9.35,20.45 L9.35,9 L12.77,9 L12.77,10.56 L12.81,10.56 C13.29,9.66 14.45,8.71 16.18,8.71 C19.79,8.71 20.45,11.08 20.45,14.17 L20.45,20.45 Z M5.34,7.43 C4.2,7.43 3.27,6.51 3.27,5.37 C3.27,4.23 4.2,3.3 5.34,3.3 C6.48,3.3 7.4,4.23 7.4,5.37 C7.4,6.51 6.48,7.43 5.34,7.43 L5.34,7.43 Z M7.12,20.45 L3.56,20.45 L3.56,9 L7.12,9 L7.12,20.45 Z M23,0 L1,0 C0.45,0 0,0.45 0,1 L0,23 C0,23.55 0.45,24 1,24 L23,24 C23.55,24 24,23.55 24,23 L24,1 C24,0.45 23.55,0 23,0 L23,0 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrLinkedin;
