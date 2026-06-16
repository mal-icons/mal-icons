import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-roofing",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrRoofing {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 18h-2v-2h2v2zm-4-3v4c0 0.550.45 1 1 1h4c0.55 0 1-0.45 1-1v-4c0-0.55-0.45-1-1-1h-4c-0.55 0-1 0.45-1 1zm10-5.7V5c0-0.55-0.45-1-1-1h-1c-0.55 0-1 0.45-1 1v1.6l-3.33-3c-0.38-0.34-0.96-0.34-1.34 0l-8.36 7.53c-0.340.3-0.130.870.330.87h1.31c0.25 0 0.49-0.090.67-0.26L12 5.69l6.71 6.05c0.190.170.430.260.670.26h1.31c0.46 0 0.68-0.570.33-0.87L19 9.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrRoofing;
