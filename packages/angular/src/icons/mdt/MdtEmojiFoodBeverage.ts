import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-emoji-food-beverage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtEmojiFoodBeverage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m10 6.4 1.81 1.45c0.120.090.190.240.190.39v4.26c0 0.28-0.220.5-0.50.5h-4c-0.28 0-0.5-0.22-0.5-0.5V8.24c0-0.150.07-0.30.19-0.39L9 6.4V5H6v8c0 1.10.9 2 2 2h6c1.1 0 2-0.9 2-2V5h-6v1.4z","opacity":".3"}],["path",{"d":"M2 19h18v2H2zM20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-0.89 2-2V5c0-1.11-0.89-2-2-2zM9.5 7.28l1.5 1.2V12H8V8.48l1.5-1.2zM16 13c0 1.1-0.9 2-2 2H8c-1.1 0-2-0.9-2-2V5h3v1.4L7.19 7.85c-0.120.09-0.190.24-0.190.39v4.26c0 0.280.220.50.50.5h4c0.28 0 0.5-0.220.5-0.5V8.24c0-0.15-0.07-0.3-0.19-0.39L10 6.4V5h6v8zm4-5h-2V5h2v3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtEmojiFoodBeverage;
