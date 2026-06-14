import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-north-star-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcNorthStar24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.5 1.25a0.750.75 0 0 0-1.5 0v8.69L6.45 5.39a0.750.75 0 1 0-1.06 1.06L9.94 11H1.25a0.750.75 0 0 0 0 1.5h8.69l-4.55 4.55a0.750.75 0 0 0 1.06 1.06L11 13.56v8.69a0.750.75 0 0 0 1.5 0v-8.69l4.55 4.55a0.750.75 0 0 0 1.06-1.06L13.56 12.5h8.69a0.750.75 0 0 0 0-1.5h-8.69l4.55-4.55a0.750.75 0 1 0-1.06-1.06L12.5 9.94V1.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcNorthStar24;
