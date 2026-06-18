import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-awesomelists",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAwesomelists {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M24 11.44l-6.15-5.64-0.860.94 5.13 4.7H1.9l5.13-4.7-0.86-0.94-6.15 5.65H0v3.72c0 1.68 1.62 3.05 3.61 3.05h3.8c1.99 0 3.61-1.37 3.61-3.05v-2.45h1.97v2.45c0 1.68 1.62 3.05 3.61 3.05h3.79c1.99 0 3.61-1.37 3.61-3.05v-3.72z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAwesomelists;
