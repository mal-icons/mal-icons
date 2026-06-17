import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-water",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsWater {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.04 3.31a0.50.5 0 0 1 0.65-0.28l1.760.7a1.5 1.5 0 0 0 1.11 0l1.01-0.41a2.5 2.5 0 0 1 1.86 0l1.010.41a1.5 1.5 0 0 0 1.11 0l1.01-0.41a2.5 2.5 0 0 1 1.86 0l1.010.41a1.5 1.5 0 0 0 1.11 0l1.76-0.7a0.50.5 0 1 1 0.370.93l-1.760.7a2.5 2.5 0 0 1-1.86 0l-1.01-0.41a1.5 1.5 0 0 0-1.11 0l-1.010.41a2.5 2.5 0 0 1-1.86 0l-1.01-0.41a1.5 1.5 0 0 0-1.11 0l-1.010.41a2.5 2.5 0 0 1-1.86 0L0.31 3.96a0.50.5 0 0 1-0.28-0.65m0 3a0.50.5 0 0 1 0.65-0.28l1.760.7a1.5 1.5 0 0 0 1.11 0l1.01-0.41a2.5 2.5 0 0 1 1.86 0l1.010.41a1.5 1.5 0 0 0 1.11 0l1.01-0.41a2.5 2.5 0 0 1 1.86 0l1.010.41a1.5 1.5 0 0 0 1.11 0l1.76-0.7a0.50.5 0 1 1 0.370.93l-1.760.7a2.5 2.5 0 0 1-1.86 0l-1.01-0.41a1.5 1.5 0 0 0-1.11 0l-1.010.41a2.5 2.5 0 0 1-1.86 0l-1.01-0.41a1.5 1.5 0 0 0-1.11 0l-1.010.41a2.5 2.5 0 0 1-1.86 0L0.31 6.96a0.50.5 0 0 1-0.28-0.65m0 3a0.50.5 0 0 1 0.65-0.28l1.760.7a1.5 1.5 0 0 0 1.11 0l1.01-0.41a2.5 2.5 0 0 1 1.86 0l1.010.41a1.5 1.5 0 0 0 1.11 0l1.01-0.41a2.5 2.5 0 0 1 1.86 0l1.010.41a1.5 1.5 0 0 0 1.11 0l1.76-0.7a0.50.5 0 1 1 0.370.93l-1.760.7a2.5 2.5 0 0 1-1.86 0l-1.01-0.41a1.5 1.5 0 0 0-1.11 0l-1.010.41a2.5 2.5 0 0 1-1.86 0l-1.01-0.41a1.5 1.5 0 0 0-1.11 0l-1.010.41a2.5 2.5 0 0 1-1.86 0L0.31 9.96a0.50.5 0 0 1-0.28-0.65m0 3a0.50.5 0 0 1 0.65-0.28l1.760.7a1.5 1.5 0 0 0 1.11 0l1.01-0.41a2.5 2.5 0 0 1 1.86 0l1.010.41a1.5 1.5 0 0 0 1.11 0l1.01-0.41a2.5 2.5 0 0 1 1.86 0l1.010.41a1.5 1.5 0 0 0 1.11 0l1.76-0.7a0.50.5 0 1 1 0.370.93l-1.760.7a2.5 2.5 0 0 1-1.86 0l-1.01-0.41a1.5 1.5 0 0 0-1.11 0l-1.010.41a2.5 2.5 0 0 1-1.86 0l-1.01-0.41a1.5 1.5 0 0 0-1.11 0l-1.010.41a2.5 2.5 0 0 1-1.86 0l-1.76-0.7a0.50.5 0 0 1-0.28-0.65"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsWater;
