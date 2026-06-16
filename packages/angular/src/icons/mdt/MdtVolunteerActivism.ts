import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-volunteer-activism",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtVolunteerActivism {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 13h2v7H3zm13-2.71c1.96-1.82 4-3.88 4-4.99 0-0.74-0.56-1.3-1.3-1.3-0.44 0-0.890.21-1.180.55L16 6.34l-1.52-1.79A1.59 1.59 0 0 0 13.3 4c-0.74 0-1.30.56-1.3 1.3 0 1.11 2.04 3.17 4 4.99zM19 18h-5.35c-0.54 0-1.07-0.09-1.58-0.26l-2.38-0.790.63-1.9 2.380.79c0.310.10.630.150.950.15H15c0-0.37-0.23-0.7-0.57-0.83L8.61 13H7v5.48l6.97 1.94 5.93-1.85A11 0 0 0 19 18z","opacity":".3"}],["path",{"d":"M16 13c3.09-2.81 6-5.44 6-7.7C22 3.45 20.55 2 18.7 2c-1.04 0-2.050.49-2.7 1.25A3.62 3.62 0 0 0 13.3 2C11.45 2 10 3.45 10 5.3c0 2.26 2.91 4.89 6 7.7zm-2.7-9c0.44 0 0.890.21 1.180.55L16 6.34l1.52-1.79c0.29-0.340.74-0.55 1.18-0.550.74 0 1.30.56 1.3 1.3 0 1.12-2.04 3.17-4 4.99-1.96-1.82-4-3.88-4-4.99 0-0.740.56-1.3 1.3-1.3zM19 16h-2c0-1.2-0.75-2.28-1.87-2.7L8.97 11H1v11h6v-1.44l7 1.94 8-2.5v-1c0-1.66-1.34-3-3-3zM5 20H3v-7h2v7zm8.970.41L7 18.48V13h1.61l5.82 2.17c0.340.130.570.460.570.83h-1.35c-0.32 0-0.64-0.05-0.95-0.15l-2.38-0.79-0.63 1.9 2.380.79c0.510.17 1.040.26 1.580.26H19c0.39 0 0.740.230.90.56l-5.93 1.84z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtVolunteerActivism;
