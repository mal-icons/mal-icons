import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-brevo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBrevo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zM7.2 4.8h5.75c2.34 0 3.9 1.41 3.9 3.52 0 1.02-0.35 1.86-1.09 2.59C17.19 11.81 18 13.22 18 14.79c0 2.86-2.64 5.02-6.16 5.02H7.2v-15zm2.09 1.95v5.54h0.07c0.23-0.430.86-0.8 2.25-1.23 2.04-0.66 3.04-1.52 3.04-2.65 0-1-0.77-1.66-1.92-1.66H9.29zm4.87 5.27c-0.770.39-1.670.75-2.76 1.11-1.230.39-2.11 1.39-2.11 2.41v2.32h2.37c2.39 0 4.15-1.34 4.15-3.15 0-1.07-0.62-2.09-1.64-2.68z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBrevo;
