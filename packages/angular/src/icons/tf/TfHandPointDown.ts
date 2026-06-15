import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-hand-point-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfHandPointDown {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.75 11.3c-0.96 0.58-1.7-0.17-1.98-0.45l-0.26-0.28v4.9c0 0.85-0.67 1.54-1.5 1.54s-1.5-0.69-1.5-1.53v-2.33c-0.16 0.06-0.34 0.09-0.52 0.09-0.79 0-1.44-0.63-1.5-1.42-0.16 0.06-0.33 0.09-0.5 0.09-0.83 0-1.5-0.69-1.5-1.54v-0.14c-0.14 0.05-0.3 0.08-0.46 0.08-0.83 0-1.51-0.69-1.51-1.53v-3.19c0-0.67 0.32-1.55 0.61-2.33 0.19-0.51 0.39-1.08 0.39-1.31v-0.86c0-0.28 0.22-0.5 0.5-0.5s0.5 0.22 0.5 0.5v0.86c0 0.4-0.2 0.96-0.45 1.65-0.26 0.7-0.55 1.5-0.55 1.99v3.19c0 0.29 0.24 0.54 0.52 0.54 0.29 0 0.45-0.26 0.46-0.52 0.01-0.27 0.23-0.48 0.5-0.48 0 0 0.01 0 0.01 0 0.27 0.01 0.49 0.23 0.49 0.5v1.56c0 0.3 0.23 0.54 0.51 0.54 0.26 0 0.48-0.22 0.5-0.5 0.02-0.27 0.24-0.47 0.51-0.47 0.27 0.01 0.48 0.23 0.48 0.5v1.27c0 0.3 0.23 0.54 0.5 0.54 0.26 0 0.49-0.2 0.52-0.46 0.03-0.26 0.27-0.46 0.53-0.43 0.26 0.02 0.47 0.24 0.47 0.5v3.63c0 0.3 0.23 0.54 0.51 0.54s0.51-0.24 0.51-0.53v-6.18c0-0.21 0.13-0.39 0.32-0.47 0.19-0.07 0.41-0.02 0.55 0.13l1.11 1.21c0.46 0.46 0.61 0.37 0.75 0.29 0.25-0.15 0.33-0.48 0.19-0.74l-3.29-7.1c-0.05-0.09-0.16-0.18-0.3-0.21-0.22-0.06-0.38-0.25-0.38-0.48v-0.83c0-0.28 0.22-0.5 0.5-0.5s0.5 0.22 0.5 0.5v0.5c0.23 0.13 0.43 0.33 0.56 0.57l3.29 7.1c0.39 0.69 0.15 1.63-0.56 2.05z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfHandPointDown;
