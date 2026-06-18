import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-signature-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSignatureOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 17c3.33 -3.33 5 -6 5 -8c0 -0.39 -0.02 -0.73 -0.05 -1.03m-1.95 -1.97c-1 0 -2.03 1.09 -2 3c0.03 2.05 1.66 4.88 2.5 6c1.5 2 2.5 2.5 3.5 1l2 -3c0.33 2.67 1.33 4 3 4c0.22 0 0.71 -0.34 1.23 -0.74m3.77 -0.26c0.3 0.25 0.64 0.68 1 1"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSignatureOff;
