import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-foxtel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFoxtel {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.87 10.63l0.34-1.02H0v4.78h1.16v-1.72h1.43l0.34-1.02H1.16v-1.01zm3.03-1.08a2.45 2.45 0 1 0-0.01 4.91 2.45 2.45 0 0 0 0.01-4.91zm0 3.74a1.29 1.29 0 1 1-0.01-2.57 1.29 1.29 0 0 1 0.01 2.58zm6.51-3.68h-1.3l-0.81 1.3-0.82-1.3H8.18l1.47 2.34-1.54 2.44h1.3l0.89-1.40.88 1.41h1.3l-1.53-2.44zm0.1 1.02h1.41v3.76h1.16V10.63h1.23V9.61h-3.16zm7.3 0l0.34-1.02h-3.21v4.78h2.87l0.34-1.02h-2.05v-0.91h1.43l0.34-1.02h-1.77v-0.79zm2.14 2.73V9.61h-1.16v4.78h2.87L24 13.36Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFoxtel;
