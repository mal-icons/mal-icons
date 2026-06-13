import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-logo-appflow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoLogoAppflow {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M198.63 28.42L8 484.42H122.38L256 164.78L389.62 484.42H504L313.37 28.42H198.63Z"}],["path",{"d":"M312 346.04C312 376.97 286.93 402.04 256 402.04C225.07 402.04 200 376.97 200 346.04C200 315.11 225.07 290.04 256 290.04C286.93 290.04 312 315.11 312 346.04Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoLogoAppflow;
