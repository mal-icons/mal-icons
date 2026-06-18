import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-ancient-pavilion-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiAncientPavilionFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.52 7.88C1.68 9.83 3.09 11.45 5 11.89V19H3V21H21V19H19V11.89C20.91 11.45 22.32 9.83 22.48 7.88C21.99 7.96 21.5 8 21 8C17.19 8 13.79 5.6 12.51 2H11.49C10.21 5.6 6.81 8 3 8C2.5 8 2.01 7.96 1.52 7.88ZM17 19H7V12H17V19Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiAncientPavilionFill;
