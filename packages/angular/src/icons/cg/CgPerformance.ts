import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-performance",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgPerformance {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M11 9V13.17C9.83 13.58 9 14.69 9 16C9 17.66 10.34 19 12 19C13.66 19 15 17.66 15 16C15 14.69 14.17 13.58 13 13.17V9H11ZM11 16C11 15.45 11.45 15 12 15C12.55 15 13 15.45 13 16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16Z","fill":"currentColor"}],["path",{"d":"M12 5C15.87 5 19 8.13 19 12V13H17V12C17 9.24 14.76 7 12 7C9.24 7 7 9.24 7 12V13H5V12C5 8.13 8.13 5 12 5Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M12 23C18.08 23 23 18.08 23 12C23 5.92 18.08 1 12 1C5.92 1 1 5.92 1 12C1 18.08 5.92 23 12 23ZM12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgPerformance;
