import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-math-percent",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgMathPercent {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.24 6.34C16.63 5.95 17.27 5.95 17.66 6.34C18.05 6.73 18.05 7.37 17.66 7.76L7.76 17.66C7.37 18.05 6.73 18.05 6.34 17.66C5.95 17.27 5.95 16.63 6.34 16.24L16.24 6.34Z","fill":"currentColor"}],["path",{"d":"M9.88 9.88C9.1 10.66 7.83 10.66 7.05 9.88C6.27 9.1 6.27 7.83 7.05 7.05C7.83 6.27 9.1 6.27 9.88 7.05C10.66 7.83 10.66 9.1 9.88 9.88Z","fill":"currentColor"}],["path",{"d":"M14.12 16.95C14.9 17.73 16.17 17.73 16.95 16.95C17.73 16.17 17.73 14.9 16.95 14.12C16.17 13.34 14.9 13.34 14.12 14.12C13.34 14.9 13.34 16.17 14.12 16.95Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgMathPercent;
