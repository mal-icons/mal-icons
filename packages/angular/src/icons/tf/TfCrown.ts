import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-crown",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfCrown {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.63 6.74l-4.08-6.67-4.21 6.68-4.5-3.83 1.74 13.09h13.86l1.74-13.07-4.54 3.82zM2.45 15l-0.13-1h12.37l-0.13 1h-12.1zM14.82 13h-12.64l-1.01-7.64 3.4 2.89 3.97-6.29 3.85 6.29 3.45-2.91-1.02 7.65z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfCrown;
