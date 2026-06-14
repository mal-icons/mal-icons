import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-zoom-out-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcZoomOut24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.5 11.25a0.750.75 0 0 0 0-1.5h-8a0.750.75 0 0 0 0 1.5h8Z"}],["path",{"d":"M0 10.5C0 4.7 4.7 0 10.5 0S21 4.7 21 10.5c0 2.63-0.97 5.03-2.56 6.88l4.34 4.35a0.750.75 0 1 1-1.06 1.06l-4.34-4.34A10.46 10.46 0 0 1 10.5 21C4.7 21 0 16.3 0 10.5Zm10.5-9a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcZoomOut24;
