import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-skip-back-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSkipBackFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 11.33L18.22 4.52C18.45 4.37 18.76 4.43 18.92 4.66C18.97 4.74 19 4.84 19 4.93V19.07C19 19.34 18.78 19.57 18.5 19.57C18.4 19.57 18.3 19.54 18.22 19.48L8 12.67V19C8 19.55 7.55 20 7 20C6.45 20 6 19.55 6 19V5C6 4.45 6.45 4 7 4C7.55 4 8 4.45 8 5V11.33Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSkipBackFill;
