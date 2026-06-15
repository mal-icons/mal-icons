import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-arrow-long-down-c",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgArrowLongDownC {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M11 6.85C9.83 6.44 9 5.33 9 4.02C9 2.36 10.34 1.02 12 1.02C13.66 1.02 15 2.36 15 4.02C15 5.33 14.16 6.44 13 6.85L13.01 19.14L14.82 17.32L16.24 18.73L12.01 22.98L7.76 18.75L9.17 17.33L11.01 19.17L11 6.85ZM12 5.02C11.45 5.02 11 4.57 11 4.02C11 3.47 11.45 3.02 12 3.02C12.55 3.02 13 3.47 13 4.02C13 4.57 12.55 5.02 12 5.02Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgArrowLongDownC;
