import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-codesignal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCodesignal {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M24 1.21 13.01 2.79 12 5.62l-1.01-2.83L0 1.21 3.67 11.45l4.510.65 3.82 10.69 3.82-10.69 4.51-0.65zm-3.62 4.41-4.520.65-0.73 2.04 4.52-0.65-0.73 2.05-4.510.65L12 17.06l-2.39-6.71-4.51-0.65-0.73-2.05 4.520.65-0.73-2.04-4.52-0.65-0.73-2.05 6.680.96L12 11.35l2.43-6.82 6.68-0.96Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCodesignal;
