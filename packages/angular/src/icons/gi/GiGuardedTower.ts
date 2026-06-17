import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-guarded-tower",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiGuardedTower {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M71.6 21.99v111.12l61.16 75.81v188.65H93.41l-28.7 92.84h151.1l-6.1-92.61h0.04l-1.17-119.35-18.690.190.85 86.55h-22.92c-13.43-71.44 4.46-150.1 60.97-158.86-9.13-11.46-15.01-27.38-15.01-45.02 0-34.84 22.18-62.96 49.41-62.96 1.7 0 3.47-0.26 5.12 0h0c24.87 3.23 44.29 30.29 44.29 62.96 0 18.09-6.2 34.24-15.74 45.76 51.73 9.73 76.56 84.76 61.33 158.13h-24.62l0.85-86.54-18.69-0.18-1.11 113.64-7.32 98.32h146.54l-28.7-92.84H385.79V208.92l61.16-75.81V21.99H382.52v52.41h-39.21V21.99h-65.12v52.41H239.67V21.99h-65.12v52.41h-38.51V21.99h-64.43zm180.65 326.62v142.25h18.69V348.61h-18.69z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiGuardedTower;
