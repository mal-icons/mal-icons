import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-marriott",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMarriott {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.8 11.08l-1.18 2.41c-0.8 1.43-1.93 3.17-3.65 3.6-0.670.23-1.250.02-1.9-0.02L0 20.48a1.63 1.63 0 0 0 0.590.39c3.65 1.39 5.12-0.1 8.72-8.24l3.4 7.25h4.53l-2.14-4.89 1.21-2.53 3.35 7.31 4.340.03-7.59-16.68-3.47 1.74 2.74 6.22-1.2 2.44L9.45 2.68l-3.7 1.88Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMarriott;
