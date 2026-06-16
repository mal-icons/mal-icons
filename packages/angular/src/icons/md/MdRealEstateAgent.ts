import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-real-estate-agent",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdRealEstateAgent {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 6.5V14h-2V7.5L14 4 9 7.5V9H7V6.5l7-5 7 5zm-5.50.5h-1v1h1V7zm-2 0h-1v1h1V7zm2 2h-1v1h1V9zm-2 0h-1v1h1V9zm5.5 7h-2c0-1.2-0.75-2.28-1.87-2.7L8.97 11H1v11h6v-1.44l7 1.94 8-2.5v-1c0-1.66-1.34-3-3-3zM3 20v-7h2v7H3zm10.970.41L7 18.48V13h1.61l5.82 2.17c0.340.130.570.460.570.83 0 0-1.99-0.05-2.3-0.15l-2.38-0.79-0.63 1.9 2.380.79c0.510.17 1.040.26 1.580.26H19c0.39 0 0.740.230.90.56l-5.93 1.84z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdRealEstateAgent;
