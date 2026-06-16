import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-transit-enterexit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrTransitEnterexit {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M284-240q-18.33 0-31.17-12.83Q240-265.67 240-284v-310q0-19.58 14-33.29Q268-641 288-641t33.5 13.71Q335-613.58 335-594v185l276-276q15.09-15 36.04-15 20.96 0 36.88 16.01Q699-668.82 699-646.91T684-610L409-335h185q19.58 0 33.29 13.71Q641-307.58 641-288q0 20-13.71 34-13.71 14-33.29 14H284Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrTransitEnterexit;
