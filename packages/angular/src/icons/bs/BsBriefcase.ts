import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-briefcase",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBriefcase {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-0.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a0.50.5 0 0 1 0.50.5V3H6v-0.5a0.50.5 0 0 1 0.5-0.5m1.89 6.91L15 7.15V12.5a0.50.5 0 0 1-0.50.5h-13a0.50.5 0 0 1-0.5-0.5V7.15l6.61 1.76a1.5 1.5 0 0 0 0.77 0M1.5 4h13a0.50.5 0 0 1 0.50.5v1.62L8.13 7.95a0.50.5 0 0 1-0.26 0L1 6.12V4.5a0.50.5 0 0 1 0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBriefcase;
