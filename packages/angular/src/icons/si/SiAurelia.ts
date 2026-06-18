import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-aurelia",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAurelia {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.72 4.64L13.49 6.12l-2.29-3.44 2.23-1.49zM17.53 14.97l3.81 5.7-4.53 3.03-3.81-5.7-0.66-0.99 4.53-3.02zM11.82 18.78l0.84 1.26-3.45 2.3-1.5-2.250.75-0.5 2.7-1.8zM19.41 12.27l0.97-0.64 1.5 2.25-2.23 1.49-0.84-1.26 1.26-0.84zm-0.6 1.84l-0.66-0.99 1.26-0.840.660.99zM3.79 12.59l-0.750.5L0.74 9.66l3.45-2.3 1.61 2.41-2.7 1.8 2.7-1.80.69 1.03zM11.51 5.95l0.69 1.03-4.53 3.03L6.98 8.98 3.21 3.33 7.740.31zM14.75 5.28l-1.260.84-0.69-1.03-1.61-2.41 2.23-1.49 2.3 3.44zM9.12 20.58l-0.66-0.99 2.7-1.80.661zM18.82 14.11l-0.66-0.99 1.26-0.840.660.99zM3.79 12.59l-0.69-1.03 2.7-1.80.69 1.03zM13.49 6.12l-0.69-1.03 1.26-0.840.69 1.03zM17.53 14.97l-4.53 3.03-0.66-0.99 4.53-3.02zM11.51 5.95l0.69 1.03-4.53 3.03L6.98 8.98zM2.51 5.13l0.86 1.28-1.280.86-0.86-1.28zM7.13 20.51l0.86 1.28-1.280.86-0.86-1.28zM3.75 21.8L0 16.13 20.06 2.71 24 8.29z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAurelia;
