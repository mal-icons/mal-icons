import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-pen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsPen {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.59 7H7.7a2 2 0 0 0-1.88 1.32l-3.76 10.34c-0.130.37-0.040.770.23 1.05l0.290.29 6.42-6.42c0-0.03-0.01-0.05-0.01-0.08a1.5 1.5 0 1 1 1.5 1.5c-0.03 0-0.05-0.01-0.08-0.01l-6.42 6.420.290.29a11 0 0 0 1.050.23l10.34-3.76a2 2 0 0 0 1.32-1.88v-3.88L19 10.41 13.59 5l-2 2zm8.35 2.06-5-5 2.12-2.12 5 5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsPen;
