import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-memories-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMemoriesFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 12C22 6.48 17.52 2 12 2 8.98 2 6.28 3.34 4.45 5.45L2 3V9H8L5.86 6.87C7.33 5.11 9.54 4 12 4 16.42 4 20 7.58 20 12 20 16.42 16.42 20 12 20 7.58 20 4 16.42 4 12H2C2 17.52 6.48 22 12 22 17.52 22 22 17.52 22 12ZM10.78 8.52 15.38 11.58C15.67 11.78 15.67 12.22 15.38 12.42L10.78 15.48C10.45 15.7 10 15.47 10 15.07V8.93C10 8.53 10.45 8.3 10.78 8.52Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMemoriesFill;
