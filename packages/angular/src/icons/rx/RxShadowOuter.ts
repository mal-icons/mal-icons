import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-shadow-outer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxShadowOuter {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"opacity":".05","fill-rule":"evenodd","clip-rule":"evenodd","d":"M12.14 3.89C13.86 4.94 15 6.84 15 9C15 12.31 12.31 15 9 15C6.84 15 4.95 13.86 3.9 12.16L4.32 11.89C5.29 13.46 7.02 14.5 9 14.5C12.04 14.5 14.5 12.04 14.5 9C14.5 7.02 13.45 5.28 11.88 4.31L12.14 3.89Z","fill":"currentColor"}],["path",{"opacity":".2","fill-rule":"evenodd","clip-rule":"evenodd","d":"M12.85 5.07C13.87 6.07 14.5 7.46 14.5 9C14.5 12.04 12.04 14.5 9 14.5C7.46 14.5 6.07 13.87 5.07 12.85L5.43 12.5C6.34 13.43 7.6 14 9 14C11.76 14 14 11.76 14 9C14 7.6 13.43 6.34 12.5 5.43L12.85 5.07Z","fill":"currentColor"}],["path",{"opacity":".35","fill-rule":"evenodd","clip-rule":"evenodd","d":"M13.3 6.45C13.75 7.2 14 8.07 14 9C14 11.76 11.76 14 9 14C8.05 14 7.16 13.73 6.4 13.27L6.66 12.85C7.34 13.26 8.14 13.5 9 13.5C11.49 13.5 13.5 11.49 13.5 9C13.5 8.16 13.27 7.38 12.87 6.71L13.3 6.45Z","fill":"currentColor"}],["path",{"opacity":".5","fill-rule":"evenodd","clip-rule":"evenodd","d":"M13.37 7.94C13.46 8.28 13.5 8.64 13.5 9C13.5 11.49 11.49 13.5 9 13.5C8.61 13.5 8.23 13.45 7.87 13.36L8 12.87C8.32 12.96 8.65 13 9 13C11.21 13 13 11.21 13 9C13 8.68 12.96 8.36 12.89 8.06L13.37 7.94Z","fill":"currentColor"}],["path",{"opacity":".65","fill-rule":"evenodd","clip-rule":"evenodd","d":"M12.92 9.82C12.59 11.38 11.36 12.61 9.79 12.92L9.69 12.43C11.06 12.16 12.14 11.08 12.43 9.72L12.92 9.82Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1.28 7.5C1.28 4.06 4.06 1.28 7.5 1.28C10.94 1.28 13.73 4.06 13.73 7.5C13.73 10.94 10.94 13.73 7.5 13.73C4.06 13.73 1.28 10.94 1.28 7.5ZM7.5 2.23C4.59 2.23 2.23 4.59 2.23 7.5C2.23 10.42 4.59 12.78 7.5 12.78C10.42 12.78 12.78 10.42 12.78 7.5C12.78 4.59 10.42 2.23 7.5 2.23Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxShadowOuter;
